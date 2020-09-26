import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import BioForm from "./BioForm";

function NewBioForm(props){

  function handleNewBioFormSubmission(event) {
    event.preventDefault();
    props.onBioCreation({bio: event.target.bio.value, id: v4()});
  }

  return (
    <React.Fragment>
      <BioForm
        bioFormSubmissionHandler={handleNewBioFormSubmission}
        buttonText="Add Bio" />
    </React.Fragment>
  );
}

NewBioForm.propTypes = {
  onBioCreation: PropTypes.func
};

export default NewBioForm;