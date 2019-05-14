import React from 'react'
import SkillsList from './SpecialistAt/SkillsList';

export default function SpecialistAt(props) {
  return (
    <div>
      <SkillsList specialistTabItems={props.specialistTabItems}/>
    </div>
  )
}
