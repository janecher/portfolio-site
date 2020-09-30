import React from 'react';
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function SignUp(props){
 
  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      window.location = 'home.html';
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <div className="panel panel-success col-sm-6">
        <Link to="/"><button type="button" className="btn btn-primary mb-3">Home</button></Link>        
        <h3>Sign up</h3>
        <div className="panel-body">
          <form onSubmit={doSignUp}>
            <div className ="form-group">
              <label>Email:</label>
              <input className="form-control" 
                type='text'
                name='email'
                required
              />
            </div>
            <div className ="form-group">
              <label>Password:</label>
              <input className="form-control" 
                type='password'
                name='password'
                required
              />
            </div>
            <button type='submit' className="btn btn-info">Sign Up</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SignUp
