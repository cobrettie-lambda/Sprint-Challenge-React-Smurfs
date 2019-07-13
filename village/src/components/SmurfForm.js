import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      errMsg: null
    };
  }

  addSmurf = event => {
    event.preventDefault();
  
    const { name, age, height } = this.state
    const payload = { name, age, height }

    axios
      .post('http://localhost:3333/smurfs', payload)
      .then(response => {
        this.setState({
          errMsg: null
        })

        this.props.updateSmurf(response.data)
        this.props.history.push('/')
      })
      .catch(error => {
        console.log('Error', error)
      })
  } 

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errMsg } = this.state

    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <p>{errMsg}</p>
          <input
            className="form-input"
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            className="form-input"
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            className="form-input"
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
