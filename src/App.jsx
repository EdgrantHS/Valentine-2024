import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='red_anvelope' className='bg-red-500 w-[300px] h-[500px] outline outline-4 outline-red-600 rounded-md relative'>
        <div id="anvelope-flap" className="w-full h-1/5 outline outline-4 outline-red-600 rounded-b-full bg-rose-500" />
        
      </div>
      <h1 className="text-4xl font-bold">Hello, Vite + React!</h1>
      <p className="text-2xl">
        <button
          className="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-md hover:rotate-90 transition-transform duration-500 ease-in-out"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </p>      
    </>
  )
}

export default App
