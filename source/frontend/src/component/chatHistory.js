



import React, { Component } from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#111317',
  padding: theme.spacing(1),
  textAlign: 'left',
  marginBottom: '1em',
  ...theme.typography.body2,
}));

class ChatHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Item elevation={10} id={this.props.ChatHistoryId}>
        </Item>
      );
  }
}

export default ChatHistory