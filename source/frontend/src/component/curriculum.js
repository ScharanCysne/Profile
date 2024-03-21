import './curriculum.css';

import React, { Component } from "react";

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


class Curriculum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item elevation={10} id="item_1">
                <div style={{color: 'white'}}>
                <h3>Education</h3>
                <p>Standy by</p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={10} id="item_2">
                <div style={{color: 'white'}}>
                <h3>Experience</h3>
                <p>Standy by</p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={10} id="item_3">
                <div style={{color: 'white'}}>
                  <h3>Personal Projects</h3>
                  <p>Standy by</p>
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={10} id="item_4">
                <div style={{color: 'white'}}>
                <h3>Skillset</h3>
                <p>Standy by</p>
                </div>
              </Item>
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default Curriculum