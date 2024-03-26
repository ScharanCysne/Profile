


import './entry.css';

import React, { Component } from "react";
import { Avatar, Chip, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#111317',
  padding: theme.spacing(1),
  textAlign: 'left',
  marginBottom: '1em',
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

    if (this.props.subtitle)
      this.state = {
        title: (<h3>{this.props.title} | <i>{this.props.subtitle}</i></h3>)
      }
    else
      this.state = {
        title: (<h3>{this.props.title}</h3>)
      }
  }

  render() {
      return (
        <Item elevation={10} id='entry'>
          <div style={{color: 'white', fontFamily: 'avenir', margin: '10px'}}>
            {this.state.title}
          </div>
          <div className="overlay">
            <div className='text'>
              {this.props.description}
            </div>
            <Chip
                label="python"
                variant="outlined"
                style={{
                  color:"#FFA800",
                  border: "solid #FFA800",
                  borderWidth: "1px"
                }}
              />
          </div>
        </Item>
      );
  }
}

export default Entry