import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// page routes
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

// components import
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:sgl' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
