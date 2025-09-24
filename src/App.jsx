
import { Suspense, useState } from 'react'
import './App.css'
import Available from './Available-com/Available'
import Banner_design from './Banner/Banner-design'
import Navbar from './Nav/Navbar'
import Toggling from './Toggling/Toggling'
import Selected from './Selected/Selected'
  import { ToastContainer } from 'react-toastify';

 const playerData = async () => {
    const res = await fetch('/Json-data.json')
    return res.json()

  }
const playerPromisses = playerData()

// Player data
function App() {

 
  // Toggleing
  const [toggling,setToggling]=useState(true)
  const TogglingBtn1=()=>{
    setToggling(true)
  }
  const TogglingBtn2=()=>{
    setToggling(false)
  }

  // Balance change state
  const [availabalance,setAvailablebalance]=useState(60000000)
  // player information passing
  const [buyPlayer,setBuyPlayer]=useState([])

  const removeHandler=(p)=>{
    // console.log(p)
    const remove=buyPlayer.filter(pLayer=>pLayer.player_name!==p.player_name)
    setBuyPlayer(remove)
    let money=parseInt(p.price.split("USD").join("").split(",").join(""))
     const addMoney= availabalance+money
    setAvailablebalance(addMoney)
  }


  return (
    <>
      {/* navbar */}
      <Navbar availabalance={availabalance} ></Navbar>
      {/* Banner Part */}
      <Banner_design></Banner_design>
      {/* toggling */}
      <Toggling  TogglingBtn1={TogglingBtn1}  buyPlayer={buyPlayer}  TogglingBtn2={ TogglingBtn2} toggling={toggling}  ></Toggling>
      {/*available   */}
      {
        toggling===true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>} >
        <Available playerPromisses={playerPromisses} availabalance={availabalance}  setAvailablebalance={setAvailablebalance} buyPlayer={buyPlayer} setBuyPlayer={setBuyPlayer} ></Available>
      </Suspense>:<Selected buyPlayer={buyPlayer} removeHandler={removeHandler} ></Selected>
      }
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
