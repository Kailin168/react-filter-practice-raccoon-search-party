import React from 'react'

function RaccoonCard({raccoon}) {
  return (
    <div className="raccoon-card">
      <h3>{raccoon.name}</h3>
      <img src={raccoon.image} alt={raccoon.name} />
    </div>
  )
}

export default RaccoonCard
