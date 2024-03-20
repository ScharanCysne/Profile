import React, { Component } from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './curriculum.css'; // Tell webpack that Button.js uses these styles


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'lightgray',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  marginBottom: '1em'
}));

class CurriculumItem extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        return (
          <div>
            <Item id="item_1">
              <h3>Curriculum Item</h3>
              <p>Standy by</p>
            </Item>
            <Item id="item_1">
              <h3>Curriculum Item</h3>
              <p>Standy by</p>
            </Item>
            <Item id="item_1">
              <h3>Curriculum Item</h3>
              <p>Standy by</p>
            </Item>
          </div>
        );
    }
}

export default CurriculumItem