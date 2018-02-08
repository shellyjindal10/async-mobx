import React, { Component } from 'react';
import People from './component/people'
import PeopleStore from './store/PeopleStore'

class App extends Component {
  render() {
    return (
      <People store={PeopleStore}/>
    );
  }
}

export default App;
