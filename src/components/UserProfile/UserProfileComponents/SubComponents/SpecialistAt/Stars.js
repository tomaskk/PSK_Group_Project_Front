import React from 'react';
// import {StarDisabled as GreyStar} from  '../../../UserProfileImages/UserProfileFooterImages/StarDisabled.jsx'
import StarEnabled from './images/StarEnabled.jsx';
import StarDisabled from './images/StarDisabled.jsx';

export default function Stars(props) {
  const threeStars = (
    <div>
      <StarEnabled />
      <StarEnabled />
      <StarEnabled />
    </div>
  );

  const twoStars = (
    <div>
      <StarDisabled />
      <StarEnabled />
      <StarEnabled />
    </div>
  );

  const oneStar = (
    <div>
      <StarDisabled />
      <StarDisabled />
      <StarEnabled />
    </div>
  );

  let starOutput = { oneStar };

  if (props.starCount === 3) {
    starOutput = threeStars;
  }
  if (props.starCount === 2) {
    starOutput = twoStars;
  }
  if (props.starCount === 1) {
    starOutput = oneStar;
  }

  return <div>{starOutput}</div>;
}
