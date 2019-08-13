import React from 'react';
// import './App.css';

// component routes
import Home from './components/Home';
import Rooms from './components/Rooms';
import SingleRoom from './components/SingleRoom';
import Error from './components/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/rooms/' component={Rooms} />
      <Route exact path='/rooms/:sgl' component={SingleRoom} />
    </>
  );
}

export default App;
