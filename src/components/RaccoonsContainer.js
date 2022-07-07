import React from 'react'
import RaccoonCard from './RaccoonCard'

function RaccoonsContainer({raccoonsList, searchResult}) {
  return (
    <div className="raccoon-container">
      {searchResult.map((raccoon)=>{
        return(
        <RaccoonCard key={raccoon.id} raccoon={raccoon} />
        )
      })}
    </div>
  )
}

export default RaccoonsContainer
