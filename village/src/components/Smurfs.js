import React, { Component } from 'react';

import Smurf from './Smurf';
import '../App.css';

class Smurfs extends Component {
  render() {
    return (
      <div className="smurf-card-contain">
        <div className="smurfs">
          <h1 className="smurf-heading">Smurf Village</h1>
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
