import './education.css';

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

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <div>
          <Grid container spacing={0} style={{position: 'absolute', top: '260%', left: '4em'}}>
            <Grid item xs={6}>
              <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'left'}}>
                <h2>
                  <text style={{backgroundColor: '#FFA800', color: 'black'}}>Software Engineer</text>
                  <text> @ QuantumBlack, AI by McKinsey</text>
                </h2>
                <h3>São Paulo, Brazil | 2023 - Today</h3>
              </div>
              <Item elevation={10} id="item_2">
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    {avatarSelector("boat")}
                  </Grid>
                  <Grid item xs={10}>
                    <div style={{color: 'white', fontFamily: 'avenir'}}>
                      <h2>Digital Twin | Offshore Shipbuilding Optimizer</h2>
                      <p>Mantém título, tudo alinhado no centro verticalmente, sobe texto qndo mouse hover</p>
                    </div>
                  </Grid>
                </Grid>
              </Item>
              <Item elevation={10} id="item_3">
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    {avatarSelector("intelligence")}
                  </Grid>
                  <Grid item xs={10}>
                    <div style={{color: 'white', fontFamily: 'avenir'}}>
                      <h2>Generative AI | Autonomous Agents</h2>
                      <p>To be added</p>
                    </div>
                  </Grid>
                </Grid>
              </Item>
              <Item elevation={10} id="item_4">
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    {avatarSelector("rag")}
                  </Grid>
                  <Grid item xs={10}>
                    <div style={{color: 'white', fontFamily: 'avenir'}}>
                      <h2>Generative AI | Multimodal RAGs</h2>
                      <p>To be added</p>
                    </div>
                  </Grid>
                </Grid>
              </Item>
              <Item elevation={10} id="item_4">
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    {avatarSelector("rag")}
                  </Grid>
                  <Grid item xs={10}>
                    <div style={{color: 'white', fontFamily: 'avenir'}}>
                      <h2>Generative AI | Multimodal RAGs</h2>
                      <p>To be added</p>
                    </div>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={6}>
              {/* Education & Research */}
            </Grid>

          </Grid>
        </div>
      );
  }
}

export default Education