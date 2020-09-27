import React from "react";
import PropTypes from "prop-types";
//import { v4 } from 'uuid';
import { useFirestore } from 'react-redux-firebase'


function NewSkillForm(props) {

  const firestore = useFirestore();

  function addTicketToFirestore(event) {
    event.preventDefault();
    return firestore.collection('skills').add(
      {
        skill: event.target.skill.value,
      }
    );
  }

  return (
    <React.Fragment>
      <form onSubmit={addTicketToFirestore}>
        <div>
          <label>Add Skill</label>
          <input type='text' name='skill' required/>
        </div>
        <button type='submit'>Add skill</button>
      </form>
    </React.Fragment>
  );
}

NewSkillForm.propTypes = {
  onSkillCreation: PropTypes.func
};

export default NewSkillForm;