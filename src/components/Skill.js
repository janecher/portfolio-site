import React from 'react';
import PropTypes from "prop-types";

function Skill(props){
  return (
    <React.Fragment>
      <div>
        <p>{props.skill.skill}</p>
      </div>
    </React.Fragment>
  );
}

Skill.propTypes = {
  skill: PropTypes.object
};

export default Skill
