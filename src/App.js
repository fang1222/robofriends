import React from 'react';
import Cardlist from './Cardlist';
import Search from './Search';
import {robots} from './robots';

const App = () => {
  return(
    <div className='tc' >
      <h1>Robofriends</h1>
      <Search />
      <Cardlist robots={robots} />
    </div>
  );
}

export default App;

