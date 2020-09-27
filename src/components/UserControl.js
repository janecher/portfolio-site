import React, {useState} from 'react';
import BioInfo from './BioInfo';
import NewBioForm from './NewBioForm';
import NewSkillForm from './NewSkillForm';
import Skills from './Skills';

function UserControl() {

  const [bioForm, setBioForm] = useState(false);
  const [bioAddBtn, setBioAddBtn] = useState(true);

  const handleBioFormClick = () => {
    setBioForm(!bioForm);
    setBioAddBtn(!bioAddBtn);
  }

  let bioFormShow = bioForm ? <NewBioForm onBioCreation = {handleBioFormClick}/> : null
  
  return(
    <React.Fragment>
      <NewSkillForm />
      <Skills />
      {bioFormShow}
      <BioInfo onClickAddBio={handleBioFormClick} addBtn={bioAddBtn}/> 
    </React.Fragment>
  );
}

export default UserControl;
