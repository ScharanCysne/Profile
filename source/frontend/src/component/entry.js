


import './entry.css';

import React, { Component } from "react";

import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#111317',
  padding: theme.spacing(1),
  textAlign: 'left',
  marginBottom: '1em',
  ...theme.typography.body2,
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
            <h2>{this.props.title} | <i>{this.props.subtitle}</i></h2>
        )
    else
        return (
            <h2>{this.props.title}</h2>
        )
  }

  render() {
      return (
        <Item elevation={10} id={this.props.entryId}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    {avatarSelector(this.props.avatar)}
                </Grid>
                <Grid item xs={10}>
                    <div style={{color: 'white', fontFamily: 'avenir'}}>
                        {this.getTitle()}
                        <div/>
                    </div>
                </Grid>
            </Grid>
        </Item>
      );
  }
}

export default Entry