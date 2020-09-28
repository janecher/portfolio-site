import React, {useState} from 'react';
import BioInfo from './BioInfo';
import NewBioForm from './NewBioForm';
import EditBioForm from './EditBioForm';
import NewSkillForm from './NewSkillForm';
import Skills from './Skills';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { withFirestore } from 'react-redux-firebase'

function UserControl(props) {

  const [bioNewForm, setBioNewForm] = useState(false);
  const [bioEditForm, setBioEditForm] = useState(false);

  const handleBioNewFormClick = () => {
    setBioNewForm(!bioNewForm);
  }

  const handleBioEditFormClick = () => {
    setBioEditForm(!bioEditForm);
  }

  const handleDeleteBio = (id) => {
    props.firestore.delete({collection: 'bio', doc: id});
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
    currentlyVisibleBioState = <button onClick={handleBioNewFormClick}>Add Bio</button> 
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
        <h1>You must be signed in to access the queue.</h1>
      </React.Fragment>
    )
  } 
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    // All of the code previously in our render() method should go in this conditional.
    return (
      <React.Fragment>
        <NewSkillForm />
        <Skills />
        {currentlyVisibleBioState}
      </React.Fragment>
    ); 
  }
  // return (
  //   <React.Fragment>
  //     <NewSkillForm />
  //     <Skills />
  //     {currentlyVisibleBioState}
  //   </React.Fragment>
  // ); 
}

export default withFirestore(UserControl);
