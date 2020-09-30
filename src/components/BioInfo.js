import React from "react";
import PropTypes from "prop-types";

function BioInfo(props){
  return (
    <React.Fragment>
      <div className="panel panel-success">
        <div className="panel-body">
          <h3>Bio</h3>
          <p>{props.bio[0].bio}</p>
          <button className="btn btn-info mr-2" onClick={() => props.onClickEditBio()}>Edit</button>
          <button className="btn btn-info" onClick={() => props.onClickDeleteBio(props.bio[0].id)}>Delete</button>
        </div>
      </div>
    </React.Fragment>
  );
}

BioInfo.propTypes = {
  bio: PropTypes.array,
  onClickEditBio : PropTypes.func,
  onClickDeleteBio : PropTypes.func
};

export default BioInfo;