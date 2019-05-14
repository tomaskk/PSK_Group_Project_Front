import React from 'react'
import GoalList from './WantsToLearn/LearnList';

export default function WantsToLearn(props) {
  return (
    <div>
      <GoalList learnTabItems={props.learnTabItems}/>
    </div>
  )
}
