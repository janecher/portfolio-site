import React from "react";
import PropTypes from 'prop-types';
import BioForm from "./BioForm";
import { useFirestore } from 'react-redux-firebase'

function NewBioForm(props){

  const firestore = useFirestore();

  function addBioToFirestore(event) {
    event.preventDefault();
    props.onBioCreation();
    return firestore.collection('bio').add(
      {
        bio: event.target.bio.value,
      }
    );
  }

  return (
    <React.Fragment>
      <BioForm
        bioFormSubmissionHandler={addBioToFirestore}
        buttonText="Add Bio" />
    </React.Fragment>
  );
}

NewBioForm.propTypes = {
  onBioCreation: PropTypes.func
};

export default NewBioForm;