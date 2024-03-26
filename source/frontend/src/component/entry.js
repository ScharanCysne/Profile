


import './entry.css';

import React, { Component } from "react";

import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#111317',
  padding: theme.spacing(1),
  textAlign: 'left',
  marginBottom: '1em',
}));

function avatarSelector(type){
  return (
    <Avatar
      alt="boat"
      src={`/static/images/${type}.jpg`}
      style={{
        display: 'block',
        margin: 'auto',
        width: '5em',
        height: '5em',
      }}
    />
  )
}

class Entry extends Component {
  constructor(props) {
    super(props);
  }

  getTitle(){
    if (this.props.subtitle)
        return (
            <h3 >{this.props.title} | <i>{this.props.subtitle}</i></h3>
        )
    else
        return (
            <h3>{this.props.title}</h3>
        )
  }

  render() {
      return (
        <Item elevation={10} id={this.props.entryId}>
          <div style={{color: 'white', fontFamily: 'avenir'}}>
              {this.getTitle()}
              <div/>

              {/* <Chip
                label="python"
                variant="outlined"
                style={{
                  color:"#FFA800",
                  border: "solid #FFA800",
                  borderWidth: "1px"
                }}
              /> */}
          </div>
        </Item>
      );
  }
}

export default Entry