import React from 'react';
import SpecialistAt from './SubComponents/SpecialistAt';
import WantsToLearn from './SubComponents/WantsToLearn';

export default function UserProfile3Footer(props) {
  const footerOutput =
    props.currentState === 'tab1' ? (
      <SpecialistAt specialistTabItems={props.specialistTabItems} travelsList={props.travelsList}/>
    ) : (
      <WantsToLearn learnTabItems={props.learnTabItems} />
    );

  return <div>{footerOutput}</div>;
}
