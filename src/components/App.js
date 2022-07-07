import React, { useEffect, useState } from 'react'
import RaccoonsContainer from './RaccoonsContainer'
import RaccoonForm from "./RaccoonForm"
import Search from './Search'

function App() {
  
  const [search, setSearch] = useState('')
  const [raccoonsList, setRaccoonsList] = useState ([])

useEffect(()=>{
fetch('http://localhost:5001/raccoons')
.then (res=>res.json())
.then (setRaccoonsList)
},[])

function newRaccoon (oneNewRaccoon) {
  setRaccoonsList([...raccoonsList, oneNewRaccoon])
console.log(oneNewRaccoon)
}

const searchResult= raccoonsList.filter((raccoon)=>{
return (raccoon.name.toLowerCase().includes(search.toLowerCase()))
})


  return (
    <div className="App">

      <h1>🦝 Raccoon Search Party 🎉</h1>

      <Search search={search} setSearch={setSearch}/>

      <RaccoonsContainer searchResult={searchResult} raccoonsList={raccoonsList}/>

      <RaccoonForm newRaccoon={newRaccoon}/>

    </div>
  );
}

export default App;
