import React from "react";
import {
    MinChatUiProvider,
    MainContainer,
    MessageInput,
    MessageContainer,
    MessageList,
    MessageHeader
} from "@minchat/react-chat-ui";

function Chat() {
    return (
        <MinChatUiProvider theme="#6ea9d7">
        <MainContainer style={{ height: '80vh' }}>
            <MessageContainer>
            <MessageHeader />
            <MessageList
                currentUserId='dan'
                messages={[{
                text: 'Hello',
                user: {
                    id: 'mark',
                    name: 'Markus',
                },
                }]}
            />
            <MessageInput placeholder="Type message here" />
            </MessageContainer>
        </MainContainer>
        </MinChatUiProvider>
    )
}

export default Chat
