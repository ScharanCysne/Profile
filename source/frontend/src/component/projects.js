import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Entry from './entry';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <Grid container spacing={0} style={{position: this.props.position_type, top: this.props.position, left: '4em'}}>
            <Grid item xs={6}>
              <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'left'}}>
                <h2>
                  <text style={{backgroundColor: '#FFA800', color: 'black', paddingLeft: '5px',
                      paddingRight: '5px'}}>Open Source</text>
                  <text> Projects</text>
                </h2>
              </div>
              <Entry title={"Multi-Purpose Autonomous Drone Network"} avatar={"boat"} entryId={"project_item"}/>
              <Entry title={"Generative AI Village"} avatar={"intelligence"} entryId={"project_item"}/>
              <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'left'}}>
                <h2>
                  <text style={{
                      backgroundColor: '#FFA800',
                      color: 'black',
                      paddingLeft: '5px',
                      paddingRight: '5px'
                  }}>
                    Research
                  </text>
                  <text> Projects</text>
                </h2>
              </div>
              <Entry title={"ECHOS"} subtitle={"Efficient CHatbot OS"} avatar={"rag"} entryId={"project_item"}/>
              <Entry title={"ITAndroids' Robotics Lab"} avatar={"rag"} entryId={"project_item"}/>
            </Grid>
            <Grid item xs={6}>
              {/* Projects & Research */}
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default Projects