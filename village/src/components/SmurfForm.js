import React, { Component } from 'react';
import axios from 'axios';

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
      .post(`http://localhost:3333/smurfs`, payload)
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
        <form onSubmit={this.handleAdd}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
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
