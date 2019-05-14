import React from 'react'
import SkillRow from './SkillRow';

export default function SkillsList(props) {
    const skillRows = [...props.specialistTabItems]
    const skillRowItems = skillRows.map((skillRow) =>
        <li key={skillRow.id} className="skills__row">
            <SkillRow 
                knowTechName={skillRow.knowTechName}
                starCount={skillRow.stars}    
            />
        </li>
    );

  return (
    <div>
        <ul className="skills">
            {skillRowItems}
        </ul>
    </div>
  )
}
