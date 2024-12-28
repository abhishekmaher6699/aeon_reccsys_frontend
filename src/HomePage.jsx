// HomePage.jsx
import { useState } from 'react'
import InputBar from './components/InputBar'
import DisplayGrid from './components/DisplayGrid'
import Navbar from './components/NavBar'

function HomePage() {
  const [data, setData] = useState(null)

  return (
    <div className='min-h-screen'>
      <Navbar />
      
      <div className='flex flex-col items-center py-5 md:py-2'>
        <div className='flex flex-col justify-center items-center'>
          <span> <img src="logo.png" className='h-12 md:h-16' alt="" /></span>
          <h1 className='text-xl md:text-3xl font-bold text-red-700 font-bree pb-5'>Essay Recommendations</h1>
        </div>

        <InputBar setData={setData} />
        <DisplayGrid data={data} />
      </div>
    </div>
  )
}

export default HomePage