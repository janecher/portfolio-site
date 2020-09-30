import React from 'react';
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function SignIn(props){
  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      window.location = 'home.html';
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <div className="panel panel-success col-sm-6">
        <Link to="/"><button type="button" className="btn btn-primary mb-3">Home</button></Link>
        <h3>Sign in</h3>
        <div className="panel-body">
          <form onSubmit={doSignIn}>
            <div className ="form-group">
              <label>Email:</label>
              <input className="form-control"
                type='text'
                name='signinEmail'
              />
            </div>
            <div className ="form-group">
              <label>Email:</label>
              <input className="form-control"
                type='password'
                name='signinPassword'
              />
            </div>
            <button type='submit' className="btn btn-info">Sign in</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SignIn
