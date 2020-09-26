import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';


function NewSkillForm(props) {

  function handleNewSKillFormSubmission(event) {
    event.preventDefault();
    props.onSkillCreation({skill: event.target.skill.value, id: v4()});
    event.target.reset();
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewSKillFormSubmission}>
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