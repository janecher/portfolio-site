import React from 'react';
import Skill from './Skill'

function Skills(props){
  const { skills} = props
  console.log(skills);
  return (
    <React.Fragment>
      <ol>
      {skills.map((skill) =>
        <li key={skill.id}>
          <Skill skill={skill} />
        </li>
      )}
      </ol>
    </React.Fragment>
  )
}
export default Skills