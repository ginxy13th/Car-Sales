import React from 'react';
import { addFeatures } from '../actions/actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
    

  return (
    <li>
      {/* add onclick to add features to car*/ }
      <button className="button" onClick={() => props.addFeatures(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeatures})(AdditionalFeature);
