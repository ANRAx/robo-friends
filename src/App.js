import React from 'react';
import Cardlist from './Cardlist'
import Searchbox from './Searchbox';
// we destructure here because we don't specify export default robots in our robots.js file
import { robots } from './robots'
import './App.css';


// A parent feeds state into a child component
// As soon as a child component recieves state, it's a prop and cannot be changed by the child

// Props never change. They are just inputs that we get and we never modify them. 
// State is the description of your app. It's just an object that describes your application 
// State in this application is the robots and whatever is entered in the searchbar
// State is able to change


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchfield: ""
    }
  }
  
  onSearchChange(e) {
    console.log(e.target.value);
    
  }

  render() {
    return (
      <div className="App">
        <h1>Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Cardlist robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
