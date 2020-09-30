import React from 'react';
import PropTypes from "prop-types";

function Skill(props){
  return (
    <React.Fragment>
      <div>
        <p>{props.skill}
          <button className="btn btn-info ml-3"onClick={() => props.onClickDeleteSkill(props.id)}>X</button>
        </p>
      </div>
    </React.Fragment>
  );
}

Skill.propTypes = {
  skill: PropTypes.string,
  onClickDeleteSkill : PropTypes.func
};

export default Skill
