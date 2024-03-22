import './skillset.css';

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

class Skillset extends Component {
  render() {
      return (
        <div>
          <Grid container spacing={2} style={{position: 'absolute', top: '400%', left: 'auto'}}>
            <Grid item xs={3}>
                <Item elevation={10} id="item_a">
                    <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'center'}}>
                        {avatarSelector("intelligence")}
                        Software<br/>Engineering
                    </div>
                </Item>
            </Grid>
            <Grid item xs={3}>
                <Item elevation={10} id="item_a">
                    <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'center'}}>
                        {avatarSelector("intelligence")}
                        Machine<br/>Learning
                    </div>
                </Item>
            </Grid>
            <Grid item xs={3}>
                <Item elevation={10} id="item_a">
                    <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'center'}}>
                        {avatarSelector("intelligence")}
                        Data<br/>Science
                    </div>
                </Item>
            </Grid>
            <Grid item xs={3}>
                <Item elevation={10} id="item_a">
                    <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'center'}}>
                        {avatarSelector("intelligence")}
                        Data<br/>Engineering
                    </div>
                </Item>
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default Skillset