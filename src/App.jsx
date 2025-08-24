import React from 'react'
import Sidebar from './components/Sidebar'
import MainComponent from './components/MainComponent'

const App = () => {

  return (
   <>
   <div className='flex'>
    <Sidebar/>
   <MainComponent />
   </div>
   </>
  )
}

export default App
