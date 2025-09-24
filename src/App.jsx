
import { Suspense, useState } from 'react'
import './App.css'
import Available from './Available-com/Available'
import Banner_design from './Banner/Banner-design'
import Navbar from './Nav/Navbar'
import Toggling from './Toggling/Toggling'
import Selected from './Selected/Selected'

// Player data
function App() {

  const playerData = async () => {
    const res = await fetch('/Json-data.json')
    return res.json()

  }
  const playerPromisses = playerData()
  // Toggleing
  const [toggling,setToggling]=useState(true)
  const TogglingBtn1=()=>{
    setToggling(true)
  }
  const TogglingBtn2=()=>{
    setToggling(false)
  }
  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>
      {/* Banner Part */}
      <Banner_design></Banner_design>
      {/* toggling */}
      <Toggling  TogglingBtn1={TogglingBtn1}  TogglingBtn2={ TogglingBtn2} toggling={toggling}  ></Toggling>
      {/*available   */}
      {
        toggling===true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>} >
        <Available playerPromisses={playerPromisses} ></Available>
      </Suspense>:<Selected></Selected>
      }
      
    </>
  )
}

export default App
