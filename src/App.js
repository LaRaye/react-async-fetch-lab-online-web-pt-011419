import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    
    state = {
      peopleInSpace: []
    }
  }
  
  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }
}