import React from 'react';
import Star from './SelfProfileImages/Star.jsx';
import StarDisabled from './SelfProfileImages/StarDisabled.jsx';

export default function Stars(props) {
  const threeStars = (
    <div>
      <Star />
      <Star />
      <Star />
    </div>
  );

  const twoStars = (
    <div>
      <StarDisabled />
      <Star />
      <Star />
    </div>
  );

  const oneStar = (
    <div>
      <StarDisabled />
      <StarDisabled />
      <Star />
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
