import React, { Component } from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './curriculum.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  marginBottom: '1em'
}));


class Curriculum extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <div>
          <Item id="item_1">
            <h3>Education</h3>
            <p>Standy by</p>
          </Item>
          <Item id="item_1">
            <h3>Experience</h3>
            <p>Standy by</p>
          </Item>
          <Item id="item_1">
            <h3>Personal Projects</h3>
            <p>Standy by</p>
          </Item>
        </div>
      );
  }
}

export default Curriculum