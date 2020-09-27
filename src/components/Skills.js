import React from 'react';
import Skill from './Skill';
// We need to import hooks functionality from both react-redux and react-redux-firebase.
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function Skills(props){
  // The useFirestoreConnect() hook comes from react-redux-firebase.
  useFirestoreConnect([
    { collection: 'skills' }
  ]);
  // The useSelector() hook comes from react-redux.
  const skills = useSelector(state => state.firestore.ordered.skills);
  // react-redux-firebase also offers a useful isLoaded() function.
  if (isLoaded(skills)) {
    return (
      <React.Fragment>
        <hr/>
        <h3>Skills:</h3>
        <ul>
        {skills.map((skill) => {
          return <li key={skill.id}>
            <Skill
            skill={skill.skill}
            id={skill.id}
            key={skill.id}/>
          </li>
        })}
        </ul>
      </React.Fragment>
    );
  // If the skills aren't loaded yet, our fragment will return a "Loading..." message.
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}
export default Skills