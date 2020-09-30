import React, {useState} from 'react';
import BioInfo from './BioInfo';
import NewBioForm from './NewBioForm';
import EditBioForm from './EditBioForm';
import NewSkillForm from './NewSkillForm';
import Skills from './Skills';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import firebase from "firebase/app";
import { Link } from "react-router-dom";

function UserControl(props) {

  const [bioNewForm, setBioNewForm] = useState(false);
  const [bioEditForm, setBioEditForm] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleBioNewFormClick = () => {
    setBioNewForm(!bioNewForm);
  }

  const handleBioEditFormClick = () => {
    setBioEditForm(!bioEditForm);
  }

  const handleDeleteBio = (id) => {
    props.firestore.delete({collection: 'bio', doc: id});
  }

  const doSignOut = () => {
    firebase.auth().signOut().then(function() {
      setIsSignIn(false);
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  useFirestoreConnect([
    { collection: 'bio' }
  ]);

  const bio = useSelector(state => state.firestore.ordered.bio);

  let currentlyVisibleBioState = null;
  if (bioEditForm) {      
    currentlyVisibleBioState = <EditBioForm bio = {bio[0]} onEditBio={handleBioEditFormClick} />
  } else if (bioNewForm) {
    currentlyVisibleBioState = <NewBioForm onBioCreation = {handleBioNewFormClick}/>
  } else if (isLoaded(bio) && !isEmpty(bio)){
    currentlyVisibleBioState = <BioInfo 
                                bio = {bio} 
                                onClickEditBio={handleBioEditFormClick}
                                onClickDeleteBio={handleDeleteBio}
                                />
  } else {
    currentlyVisibleBioState = <button className="btn btn-info" onClick={handleBioNewFormClick}>Add Bio</button> 
  }

  const auth = props.firebase.auth();
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <p className="text-center"><span className="mr-5"><Link to="/signin"><button type="button" className="btn btn-primary mb-3">Sign In</button></Link></span><span><Link to="/signup"><button type="button" className="btn btn-primary mb-3">Sign Up</button></Link></span></p>
      </React.Fragment>
    )
  } 
  if ((isLoaded(auth)) && (auth.currentUser != null) && isSignIn) {
    return (
      <React.Fragment>
        <button className="btn btn-primary mb-3" onClick={doSignOut}>Sign out</button>
        <NewSkillForm />
        <Skills />
        <hr/>
        {currentlyVisibleBioState}          
      </React.Fragment>
    ); 
  } 
}

export default withFirestore(UserControl);
