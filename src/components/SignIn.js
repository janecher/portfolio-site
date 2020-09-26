import React from 'react';

function SignIn(props){
  return (
    <React.Fragment>
      <button type="button" onClick = {() => props.onSignIn()} className="btn btn-info btn-lg mt-3" aria-labelledby="signUpModel" data-toggle="modal" data-target="#signUp">Sign In</button>
    </React.Fragment>
  );
}
export default SignIn
