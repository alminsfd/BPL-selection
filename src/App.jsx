
import './App.css'
import Navbar from './Nav/Navbar'


function App() {


  return (
    <>
    {/* navbar */}
      <Navbar></Navbar>
   {/* Banner Part */}
   <section className='Banner_section mx-auto max-w-7xl bg-black md:p-30 p-15 mt-5 md:rounded-2xl  '>
  <h2 className='text-center text-white md:text-3xl text-xl font-semibold ' >Assemble Your Ultimate Dream 11 Cricket Team</h2>
  <p className='text-center text-[#ccc] mt-4 font-medium md:text-xl text-base' >Beyond Boundaries Beyond Limits</p>
  <div className='flex justify-center items-center mt-5' >
  <button className=' cursor-pointer  outline-3 focus:outline-[#E7FE29] border-4 border-black  bg-[#E7FE29] md:px-4  md:py-3 p-2 ounded-2xl font-bold md:text-lg text-base rounded-2xl ' >Claim Free Credit</button>
  </div>
   </section>
    </>
  )
}

export default App
