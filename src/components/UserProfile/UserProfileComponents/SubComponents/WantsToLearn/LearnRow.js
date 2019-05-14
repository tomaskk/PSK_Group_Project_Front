import React from 'react'

export default function LearnRow(props) {
  return (
    <div>
      <div className="goal">
        <h3 className="heading3">{props.learnTechName}</h3>
        <p>{props.learnComment}</p>
      </div>
    </div>
  )
}
