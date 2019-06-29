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
      // isLoading: false,
      // errMsg: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response.data)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  // addSmurf = (smurf) => {
  //   axios
  //     .post('http://localhost:3333/smurfs', smurf)
  //     .then(response => this.setState({smurfs: response.data}))
  //     .catch(error => console.log(error))
  // }

  updateSmurf = (smurfs) => {
    this.setState({ smurfs })
  }

  render() {
    const { smurfs } = this.state

    return (
      <div className="App">
        <nav className="nav-bar">
          <NavLink to="/" className="nav-link">Villagers</NavLink>
          <NavLink to="/smurf-form" className="nav-link">Add Smurf To Village</NavLink>
        </nav>

        <Route exact path ="/" render={(props) => <Smurfs {...props} smurfs={smurfs}/>}/>
        <Route exact path = "/smurf-form" render={(props) => <SmurfForm {...props} updateSmurf={this.updateSmurf}/>}/>
      </div>
    );
  }
}

export default App;
