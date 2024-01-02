import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#2c3e50] flex-col gap-10">
      <div className="text-[#3498db] font-medium text-2xl">Increment & Decrement</div>

      <div className="bg-[#ecf0f1] flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#2c3e50]">
        <button onClick={decreaseHandler} className='border-r-2 text-xenter w-20 border-[#bdc3c7] text-5xl'>
          -
        </button>

        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>

        <button onClick={increaseHandler} className='border-r-2 text-xenter w-20 border-[#bdc3c7] text-5xl'>
          +
        </button>
      </div>

      <button onClick={resetHandler} className='text-lg bg-[#3498db] text-white px-5 py-2 rounded-sm'>
        Reset
      </button>
    </div>
  );
}

export default App;
