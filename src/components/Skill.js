import React from 'react';
import PropTypes from "prop-types";

function Skill(props){
  return (
    <React.Fragment>
      <div>
        <p>{props.skill}</p>
      </div>
    </React.Fragment>
  );
}

Skill.propTypes = {
  skill: PropTypes.string
};

export default Skill
