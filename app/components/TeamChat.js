import React from 'react';
import { chatData } from '../api/apiConfig'
import ChatMessage from './ChatMessage'
import _ from 'lodash'


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
      .then(data => this.setState({ chatdata: data }));
  }

  render() {
    const request_chat = []
    var unique_chat = []
    const unique_requested = this.state.chatdata.map(chat => {
       request_chat.push(chat.requested_by)
       unique_chat = _.uniqBy(request_chat)
    })

    //we can have a unique chat
    console.log(unique_chat)

    return (
       <React.Fragment>
        <div style={{width:'40%',display:'inline-block'}}>
        { unique_chat.map(chat =>
            <div key={chat}>
              <ul>
              <li style={{width:'300px', height: '40px', background: '#EAF7FF'}}> {chat}</li>
              </ul>
            </div>
        )}
        </div>
       </React.Fragment>
    );
  }
}

export default TeamChat;
