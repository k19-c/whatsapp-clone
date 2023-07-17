import './App.css';
import React, {useState} from 'react';
import Sidebar from './Components/sidebar/Sidebar';
import Chat from './Components/chat/Chat';
import Login from './Components/login/Login';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {useStateValue} from './Components/globalState/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
        {!user ? (
          <Login/>
        ):(
          <div className="app_body">
            <Router>
              <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <Chat/>
                </Route>              
              </Switch>            
            </Router>
          </div>
        )}
        
    </div>
  );
}

export default App;
