import React from 'react';
import SpecialistAt from './SubComponents/SpecialistAt';
import WantsToLearn from './SubComponents/WantsToLearn';

export default function UserProfile3Footer(props) {
  const footerOutput =
    props.currentState === 'Specialist' ? (
      <SpecialistAt specialistTabItems={props.specialistTabItems} />
    ) : (
      <WantsToLearn learnTabItems={props.learnTabItems} />
    );

  return <div>{footerOutput}</div>;
}
