import React from 'react';
import { removeFeatures } from '../actions/actions';
import {connect} from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        props.removeFeatures(props.feature)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeatures})(AddedFeature) ;
