import React, {useState} from 'react';
import UserControl from './UserControl';
import SignIn from './SignIn';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Make links as navbar, separate signIn and signOut, etc.

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
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

// function App() {
  
//   const [signIn, setSignIn] = useState(false);

//   const handleClick = () => {
//     setSignIn(!signIn);
//   }

//   if(!signIn) {
//     return (
//       <React.Fragment>
//         <SignIn onSignIn={handleClick}/>
//       </React.Fragment>
//     )
//   } else {
//     return (
//       <React.Fragment>
//         <UserControl />
//       </React.Fragment>
//     )
//   }
// }

export default App;
