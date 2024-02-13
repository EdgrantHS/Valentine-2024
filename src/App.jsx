import { useState } from 'react'

function App() {
  const [toggleLetter, setToggleLetter] = useState(false)

  const handleToggleLetter = () => {
    setToggleLetter(!toggleLetter)
    console.log('toggleLetter', toggleLetter)
  }

  return (
    <>
      <div id='red_anvelope' className='bg-red-500 w-[300px] h-[500px] outline outline-4 outline-red-600 rounded-md relative shadow-lg' onClick={handleToggleLetter}>
        <div id="anvelope-white" className="w-full h-1/5 bg-gray-50 rounded-b-3xl absolute flex justify-center items-end">
          <div id="anvelope-white" className="w-4/5 h-3/4 bg-gray-200 border-gray-300 border-t-4 border-x-4 overflow-hidden rounded-t-md text-black flex-col flex items-center p-4">
            <h1 className='text-2xl'>Letter</h1>
          </div>
        </div>        
        <div id="anvelope-flap" className="w-full h-1/5 outline outline-4 outline-red-600 rounded-b-3xl bg-rose-500 absolute" />       
        <div className="flex justify-center items-center w-full">
          <div id="dragon" className="w-[200px] h-[200px] absolute bottom-1/4 bg-yellow-300 rounded-full flex justify-center items-center border-4 border-yellow-500">
            <img src="https://www.svgrepo.com/show/493833/dragon.svg" alt="dragon" className='h-3/5 w-3/5' />
          </div> 
        </div>
      </div>

      {toggleLetter && <div id="letter" className="absolute bg-gray-200 border-gray-300 border-4 w-[400px] h-[600px] rounded-xl opacity-95 text-black flex flex-col p-8 items-center justify-between shadow-2xl shadow-yellow-400">
        <h1 className='text-4xl py-4'>Letter</h1>
        <div className="w-full h-4/5 text-xl p-4 flex flex-col items-center">
          <p className='text-center'>
            Helo Leciiiiiiiii, Happy Valentines day. Sedih banget gak bisa ketemu gara gara kamu di bangka. Aku harap kamu suka website ini YAY.
          </p>
        <div id="dragon" className="w-[200px] h-[200px] absolute bottom-1/4 bg-rose-300 rounded-full flex justify-center items-center border-4 border-rose-500 -mb-8">
            <img src="https://www.svgrepo.com/show/532473/heart.svg" alt="heart" className='h-3/5 w-3/5' />
          </div> 

        </div>
        <button onClick={handleToggleLetter} className='bg-red-500 text-white p-2 rounded-md hover:bg-red-700 active:bg-red-800'>Close</button>
      </div>}
    </>
  )
}

export default App
