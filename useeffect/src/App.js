import React,{useEffect, useState} from 'react'
import "./App.css"

const App = () => {
const [advice,setAdvice] = useState(null);
useEffect(() => {
  fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(data => setAdvice(data.slip));
},[]);

return (
    <div className='advicebox'>
      {advice && advice.advice}
    </div>
  )
}

export default App
