import React, { Component } from "react";

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

class SubHeader extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div style={{
          position: this.props.position_type,
          top: this.props.position,
          right: '5%',
          width: '60%',
          textAlign: "right"
      }}>
        <div style={{
          display: 'inline-block',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}>
          <div style={{textAlign: "center"}}>
            <Avatar
              alt="Nicholas Scharan Cysne"
              src="/static/images/avatar.jpg"
              style={{
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto',
                width: '10em',
                height: '10em',
              }}
            />
            <h1
              style={{
                color: 'white',
                fontFamily: 'avenir',
                fontSize: '30px',
              }}
            >
              Nicholas Scharan Cysne
            </h1>
          </div>
        </div>
        <Divider  style={{color: 'white', border: '1px solid'}}/>
        <h3
          style={{
            color: 'white',
            fontFamily: 'avenir',
            marginBottom: '5em'
          }}
        >
          <i>
            "My goal is to develop the tools, systems, and processes that enable
            artificial intelligence to be applied to the most important and complex
            problems of society."
          </i>
        </h3>
      </div>
    )
  }
}

export default SubHeader
