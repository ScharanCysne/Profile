import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Entry from './entry';

const entries = [
  {
    title: "Generative AI | Autonomous Agents",
    subtitle: "",
    avatar: "intelligence",
    description: "Description"
  },
  {
    title: "Generative AI | Multimodal RAGs",
    subtitle: "",
    avatar: "rag",
    description: "Description"
  },
  {
    title: "Digital Twin | Offshore Shipbuilding Optimizer",
    subtitle: "",
    avatar: "boat",
    description: "Description"
  },
]

class Curriculum extends Component {
  constructor(props){
    super(props)
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
              paddingRight: '5%',
            }}>
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
              {
                entries.map(
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
          </Grid>
        </div>
      );
  }
}

export default Curriculum