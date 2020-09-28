import React from "react";
//import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import BioForm from "./BioForm";
import { useFirestore } from 'react-redux-firebase'

function EditBioForm(props){
  const { bio } = props;

  const firestore = useFirestore();

  function editBioToFirestore(event) {
    event.preventDefault();
    props.onEditBio();
    const propertiesToUpdate = {
      bio: event.target.bio.value,
    }
    return firestore.update({collection: 'bio', doc: bio.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <BioForm
        bioFormSubmissionHandler={editBioToFirestore}
        buttonText="Edit Bio" />
    </React.Fragment>
  );
}

EditBioForm.propTypes = {
  onEditBio: PropTypes.func
};

export default EditBioForm;