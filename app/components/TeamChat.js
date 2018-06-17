import React from 'react';
import _ from 'lodash'
import { chatData } from '../api/apiConfig'
import ChatMessage from './ChatMessage'

class TeamChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       chatdata: [],
       done: false
    }
  }

  componentDidMount() {

    fetch(chatData)
      .then(response => response.json())
      .then(data => this.setState({ chatdata: data, done:true }));
  }

  render() {
    const request_chat = []
    var unique_chat = []
    const unique_requested = this.state.chatdata.map(chat => {
       request_chat.push(chat.requested_by)
       unique_chat = _.uniqBy(request_chat)
    })

    return (
       <React.Fragment>
        <div style={{width:'30%',display:'inline-block',border:'1px solid grey',float:'left'}}>
        { this.state.done && unique_chat.map(chat =>
            <div key={chat}>
              <ul>
              <li style={{width:'300px', height: '40px', background: '#EAF7FF'}}> {chat}</li>
              </ul>
            </div>
        )}
        </div>
        <ChatMessage chat={this.state.chatdata}/>
       </React.Fragment>
    );
  }
}

export default TeamChat;
