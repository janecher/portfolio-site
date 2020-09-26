import React, {useState} from 'react';
// import NewBioForm from './NewBioForm';
// import BioInfo from './BioInfo';
import NewSkillForm from './NewSkillForm';
import Skills from './Skills';

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import * as a from './../actions';

function UserControl() {

  // const [bioForm, setBioForm] = useState(false);
  // const [bio, setBio] = useState(null);
  const [skills, setSkills] = useState([]);

  const handleAddingSkill = (createdSKill) => {
    setSkills([...skills, createdSKill]);
    console.log(skills);
  }

  // const handleBioFormClick = () => {
  //   setBioForm(true);
  // }

  // const handleAddingBio = (createdBio) => {
  //   setBio(createdBio);
  //   setBioForm(false);
  //   console.log(createdBio);
  // }

  // const handleOnClickEditBio = () => {
  //   setBioForm(true);
  // }

  // const handleDeleteBio = () => {
  //   setBio(null);
  // }

  // let currentComponentToShow = null;
  // if(bioForm) {
  //   currentComponentToShow = <NewBioForm onBioCreation={handleAddingBio}/>;
  // } else if (bio){
  //   console.log(bio)
  //   currentComponentToShow = <BioInfo bio={bio} onClickDelete = {handleDeleteBio} onClickEdit = {handleOnClickEditBio}/>
  // } else {
  //   currentComponentToShow = <button onClick={handleBioFormClick} className="btn btn-secondary btn-lg btn-block">Add/Change Bio</button>
  // }

  //let skillsShow = skills.length !== 0 ? <Skills skills={skills}/> : null

  return(
    <React.Fragment>
      <NewSkillForm onSkillCreation={handleAddingSkill}/>
      <Skills skills={skills}/>
    </React.Fragment>
  );
}

export default UserControl;
