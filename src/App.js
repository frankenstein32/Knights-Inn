import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

// Componenets import
import Error from './pages/Error'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'

function App() {
  return (
   <div>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route exact component={Error} />
     </Switch>
   </div>
  );
}

export default App;
