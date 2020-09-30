import React from 'react';
import UserControl from './UserControl';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <UserControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
