import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      { !user ? (
        <Login />
      ): (
        <div className="app__body">
        <Router>
          {/* sidebar */}
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              {/* chat */}
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>

      </div>
      )}
      
    </div>
  );
}

export default App;
