import React, { Component } from "react";
import { Document } from 'react-pdf'

import axios from "axios";

class Curriculum extends Component {
    constructor(props) {
      super(props);
      this.state = {
        document: null
      };
    }

    componentDidMount() {
        this.getDocument();
    }

    getDocument = () => {
        axios
            .get("/api/cv/")
            .then((res) => this.setState({ document: res.data }))
            .catch((err) => console.log(err));
    };

    render() {
        return (
          <Document file={self.state.document}/>
        );
    }
}

export default Curriculum