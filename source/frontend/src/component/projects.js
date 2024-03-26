import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Entry from './entry';

const opensource = [
  {
    title: "Multi-Purpose Autonomous Drone Network",
    subtitle: "",
    avatar: "intelligence",
    description: "Description"
  },
  {
    title: "Generative AI Village",
    subtitle: "",
    avatar: "intelligence",
    description: "Description"
  },
]

const research = [
  {
    title: "ECHOS",
    subtitle: "Efficient CHatbot OS",
    avatar: "intelligence",
    description: "Description"
  },
  {
    title: "ITAndroids' Robotics Lab",
    subtitle: "",
    avatar: "intelligence",
    description: "Description"
  },
]

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <Grid
            container
            spacing={2}
            style={{
              position: this.props.position_type,
              top: this.props.position,
              paddingLeft: '5%',
            }}>
            <Grid item xs={6}>
              <div style={{color: 'white', fontFamily: 'avenir', textAlign: 'left'}}>
                <h2>
                  <text style={{backgroundColor: '#FFA800', color: 'black', paddingLeft: '5px',
                      paddingRight: '5px'}}>Open Source</text>
                  <text> Projects</text>
                </h2>
              </div>
              {
                opensource.map(
                  (entry) => (
                    <Entry
                      title={entry.title}
                      subtitle={entry.subtitle}
                      avatar={entry.avatar}
                      description={entry.description}
                    />
                  )
                )
              }
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
              {
                research.map(
                  (entry) => (
                    <Entry
                      title={entry.title}
                      subtitle={entry.subtitle}
                      avatar={entry.avatar}
                      description={entry.description}
                    />
                  )
                )
              }
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