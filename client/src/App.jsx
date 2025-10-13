import React from 'react'

function App() {
  const [counter, setCounter] = React.useState(0)
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl mb-3'>React And NodeJs Full Stack Project</h1>
      <h1>Count: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)} className='border px-3 py-1 mt-2 uppercase cursor-pointer hover:bg-black transition-all ease-in-out duration-100 hover:text-white'>Increment</button>
    </div>
    </>
  )
}

export default App