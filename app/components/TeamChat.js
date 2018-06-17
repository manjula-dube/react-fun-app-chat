import React from 'react';
import { chatData } from '../api/apiConfig'

class TeamChat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       data: [],
    }
  }

  componentDidMount() {
    fetch(chatData)
      .then( (response) => {
         this.setState({ data: response});
      } )  
  }

  render() {
    return (
      <div>
          <div className="chat-requester"> gggg</div>
      </div>
    );
  }
}

export default TeamChat;
