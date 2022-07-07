import React, { useState } from 'react'

function RaccoonForm({ newRaccoon }) {
const [name, setName]=useState('')
const [image, setImage]=useState('')

  function handleSubmit(event) {
    event.preventDefault();
    const oneNewRaccoon = {
      name: name,
      image: image,
    };
    newRaccoon(oneNewRaccoon);
    fetch('http://localhost:5001/raccoons', {
      method: 'POST',
      body: JSON.stringify(oneNewRaccoon),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="raccoon-form">
      <input onChange={(event)=>{setName(event.target.value)}} name="name" placeholder="New Raccoon Name" type="text" />
      <input onChange={(event)=>{setImage(event.target.value)}} name="image" placeholder="New Image URL" type="text" />
      <input type="submit" value="Create New Raccoon" />
    </form>
  )
}

export default RaccoonForm
