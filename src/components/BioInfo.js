import React from "react";
import PropTypes from "prop-types";

function BioInfo(props){

  return (
    <React.Fragment>
      <hr/>
      <h3>Bio</h3>
      <p>{props.bio[0].bio}</p>
      <button onClick={() => props.onClickEditBio()}>Edit</button>
      <button onClick={() => props.onClickDeleteBio(props.bio[0].id)}>Delete</button>
    </React.Fragment>
  );
}

BioInfo.propTypes = {
  bio: PropTypes.array,
  onClickEditBio : PropTypes.func,
  onClickDeleteBio : PropTypes.func
};

export default BioInfo;