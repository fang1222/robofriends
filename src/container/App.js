import React, { Component } from 'react';
import Cardlist from '../component/Cardlist';
import Search from '../component/Search';
import Scroll from '../component/Scroll';
import ErrorBoundary from '../component/ErrorBoundary';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '' 
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield : event.target.value })
  }

  render () {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()) ;
    });
    
    return !robots.length ? 
    <h1>loading...</h1> : 
    (
      <div className='tc' >
        <h1 className='f1'>Robofriends</h1>
        <Search searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;

