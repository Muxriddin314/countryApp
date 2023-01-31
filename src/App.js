import './App.css';
import React,{useState} from 'react'


function App() {
    let [counter, setCounter] = useState(0);

    function increaseCounter(){
      setCounter(counter + 1)
    }

    function subtraction(){
      setCounter(counter - 1)
    }

    return (
      <div className = "App py-12 px-6 bg-blue-200 rounded w-1/3 mx-auto mt-32">
      <button className="py-4 px-8 bg-blue-500 mr-3 text-3xl text-white hover:bg-blue-400" onClick = {increaseCounter}>+</button>
      <button className="py-4 px-8 bg-blue-500  text-3xl text-white hover:bg-blue-400" onClick = {subtraction}>-</button>
      
      <p className='text-5xl text-semibold mt-14'>{counter}</p>
      </div>
    )
 
}

export default App;
