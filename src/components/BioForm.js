import React from "react";
import PropTypes from "prop-types";

function BioForm(props) {
  return (
    <React.Fragment>
      <div className="panel panel-success">
          <div className="panel-body">
          <form onSubmit={props.bioFormSubmissionHandler}>
            <div className ="form-group">
              <label>About you (Bio)</label>
              <textarea className="form-control" 
                type='text'
                name='bio'
                required
              />
            </div>
            <button type='submit' className="btn btn-info">{props.buttonText}</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

BioForm.propTypes = {
  bioFormSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default BioForm;
