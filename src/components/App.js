import React, {useState} from 'react';
import UserControl from './UserControl';
import SignIn from './SignIn'

function App() {
  const [signIn, setSignIn] = useState(false);

  const handleClick = () => {
    setSignIn(!signIn);
  }

  if(!signIn) {
    return (
      <React.Fragment>
        <SignIn onSignIn={handleClick}/>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <UserControl />
      </React.Fragment>
    )
  }
}

export default App;
