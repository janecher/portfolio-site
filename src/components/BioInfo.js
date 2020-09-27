import React from "react";
import PropTypes from "prop-types";
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function BioInfo(props){

  useFirestoreConnect([
    { collection: 'bio' }
  ]);

  const bio = useSelector(state => state.firestore.ordered.bio);

  if (isLoaded(bio) && !isEmpty(bio)) {
    return (
      <React.Fragment>
        <hr/>
        <h3>Bio</h3>
        {console.log(bio)}
        <p>{bio[0].bio}</p>
        <button onClick={() => props.onClickEditBio()}>Edit</button>
        <button onClick={() => props.onClickDeleteBio()}>Delete</button>
      </React.Fragment>
    );
  } else if (props.addBtn){
    return (
      <React.Fragment>
        <button onClick={() => props.onClickAddBio()}>Add Bio</button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

BioInfo.propTypes = {
  onClickEdit : PropTypes.func,
  onClickDelete : PropTypes.func,
  onClickAddBio: PropTypes.func
};

export default BioInfo;