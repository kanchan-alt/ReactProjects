import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
  return (
   <>
    <div style={{color:"white"}}>Counter Value - {count}</div>
    <button onClick={() => setCount(0)}>Reset Counter</button>
    <button onClick={() => (count > 10 ? "" : setCount(count+1))}>Increase Counter</button>
    <button onClick={() => (count <= 0 ? "" : setCount(count-1))}>Decrease Counter</button>

   </>

  )
}

export default Counter;