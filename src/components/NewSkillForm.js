import React from "react";
import { useFirestore } from 'react-redux-firebase'

function NewSkillForm() {
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
      <div className="panel panel-info mb-5">
          <div className="panel-body">
          <form onSubmit={addTicketToFirestore}>
            <div className ="form-group">
              <label>Add Skill</label>
              <input className="form-control" 
                type='text'
                name='skill'
                required
              />
            </div>
            <button type='submit' className="btn btn-info">Add skill</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewSkillForm;