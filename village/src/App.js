import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      isLoading: false,
      errMsg: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch((error) => {
        console.error('Server Error', error)
      })
  }

  addSmurf = (smurf) => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {/* <SmurfForm addSmurf={this.addSmurf}/>
        <Smurfs smurfs={this.state.smurfs} /> */}
        <nav>
          <NavLink to="/">to Village</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </nav>

        <Route exact path ="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}/>
        <Route exact path = "/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.addSmurf}/>}/>
      </div>
    );
  }
}

export default App;
