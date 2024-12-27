import { useState } from 'react'
import InputBar from './components/InputBar'
import DisplayGrid from './components/DisplayGrid'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  return (
    <div className='flex flex-col items-center py-5 md:py-2 h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <span> <img src="logo.png" className='h-12 md:h-16' alt="" /></span>
        <h1 className=' text-xl md:text-3xl font-bold text-red-700  font-serif pb-5 '>Essay Recommendations</h1>
      </div>

      <InputBar setData={setData} />
      <DisplayGrid data={data} />

    </div>
  )
}

export default App
