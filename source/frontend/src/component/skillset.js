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
    constructor(props){
        super(props)
    }

  render() {
      return (
        <div >
          <Item elevation={10} id="item_a">
              <div style={{color: 'white', fontFamily: 'avenir'}}>
                  <h3>Software Engineering</h3>
              </div>
          </Item>
          <Item elevation={10} id="item_a">
              <div style={{color: 'white', fontFamily: 'avenir'}}>
                  <h3>Machine Learning</h3>
              </div>
          </Item>
          <Item elevation={10} id="item_a">
              <div style={{color: 'white', fontFamily: 'avenir'}}>
                  <h3>Data Science</h3>
              </div>
          </Item>
          <Item elevation={10} id="item_a">
              <div style={{color: 'white', fontFamily: 'avenir'}}>
                  <h3>Data Engineering</h3>
              </div>
          </Item>
        </div>
      );
  }
}

export default Skillset