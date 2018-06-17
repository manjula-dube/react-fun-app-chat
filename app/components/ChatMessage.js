import React from 'react';
import { chatData } from '../api/apiConfig'

class ChatMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       message:''
    }
  }


  render() {
    console.log(this.props.chat)
    return (
      <div style={{width:'60%',float:'left',padding:'10px',height:'600px',overflowY: 'scroll'}}>
        {this.props.chat.map(chat =>
            <div key={chat.id}>
              <div style={{width:'100%', height: '50px', border: '1px solid black',background: '#F5F6F7',margin: '12px'}}> {chat.initial_message}</div>
            </div>
        )}
      </div>
    );
  }
}

export default ChatMessage;
