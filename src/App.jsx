
import { Suspense } from 'react'
import './App.css'
import Available from './Available-com/Available'
import Banner_design from './Banner/Banner-design'
import Navbar from './Nav/Navbar'


function App() {

  const playerData = async () => {
    const res = await fetch('/Json-data.json')
    return res.json()

  }

  const playerPromisses = playerData()

  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>
      {/* Banner Part */}
      <Banner_design></Banner_design>
      {/*available   */}
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>} >
        <Available playerPromisses={playerPromisses} ></Available>

      </Suspense>
    </>
  )
}

export default App
