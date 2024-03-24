import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Entry from './entry';

class Curriculum extends Component {
  constructor(props){
    super(props)
  }
  render() {
      return (
        <div>
          <Grid container spacing={0} style={{position: this.props.position_type, top: this.props.position, right: '2em'}}>
            <Grid item xs={6}>
              {/* Work Experience */}
            </Grid>
            <Grid item xs={6}>
              <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'left'}}>
                <h2>
                  <text style={{
                      backgroundColor: '#FFA800',
                      color: 'black',
                      paddingLeft: '5px',
                      paddingRight: '5px'
                    }}
                  >
                      Software Engineer
                  </text>
                  <text> @ QuantumBlack, AI by McKinsey</text>
                </h2>
                <h3>São Paulo, Brazil | 2023 - Today</h3>
              </div>
              <Entry title={"Generative AI | Autonomous Agents"} avatar={"intelligence"} entryId={"curriculum_item"}/>
              <Entry title={"Generative AI | Multimodal RAGs"} avatar={"rag"} entryId={"curriculum_item"}/>
              <Entry title={"Digital Twin | Offshore Shipbuilding Optimizer"} avatar={"boat"} entryId={"curriculum_item"}/>
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default Curriculum