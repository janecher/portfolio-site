import React from "react";
import PropTypes from "prop-types";

function BioInfo(props){

  const bioBody = props.bio ? props.bio.bio : null
  return (
    <React.Fragment>
      <div className="col-md-6 col-sm-12">
        <div className="panel panel-success">
          <div className="panel-body">
            <h3>Bio</h3>
            <p>{bioBody}</p>
            <button onClick={() => props.onClickEdit()} className="btn btn-secondary">Edit</button>
            <button onClick={() => props.onClickDelete()} className="btn btn-secondary">Delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

BioInfo.propTypes = {
  bio: PropTypes.object,
  onClickEdit : PropTypes.func,
  onClickDelete : PropTypes.func
};

export default BioInfo;