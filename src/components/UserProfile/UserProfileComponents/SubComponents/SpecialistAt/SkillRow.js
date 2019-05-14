import React from 'react'
import Stars from './Stars';

export default function SkillRow(props) {
  return (
    <div>
        <div className="skill skill--badge">
            {props.knowTechName}
            <div className="skill__stars">
                <Stars starCount={props.starCount}/>
            </div>
        </div>
    </div>
  )
}
