import React, {Component} from "react";
import {
    MinChatUiProvider,
    MainContainer,
    MessageInput,
    MessageContainer,
    MessageList,
    MessageHeader
} from "@minchat/react-chat-ui";



class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sizeOfMessages: 0,
        messages: [],
        session: 0,
      };
    }

    handleMessage = (text) => {
        this.state.messages.push({
            id: this.state.sizeOfMessages + 1,
            session: this.state.session,
            text: text,
            user: {
                id: "user",
                name: "User"
            }
        })

        this.setState({ sizeOfMessages: this.state.sizeOfMessages + 1 });
      };

    render() {
        return (
            <MinChatUiProvider theme="#6ea9d7">
            <MainContainer style={{ height: '70vh' }}>
                <MessageContainer>
                <MessageHeader showBack={false}/>
                <MessageList
                    currentUserId='user'
                    messages={this.state.messages}

                />
                <MessageInput
                    placeholder="Ask me anything..."
                    showAttachButton={false}
                    onSendMessage={this.handleMessage}
                />
                </MessageContainer>
            </MainContainer>
            </MinChatUiProvider>
        )
    }
}

export default Chat
