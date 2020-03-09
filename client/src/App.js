import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    women: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({women: res.data});
      }).catch(err => {
        alert(`An error occurred while trying to fetch data:\n ${err}`);
      })
  }

  render() {
    return (
      <div className="App">
        Hello, World!
      </div>
    )
  }
}

export default App;
