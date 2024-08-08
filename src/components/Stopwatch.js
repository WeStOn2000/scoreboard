import React,  {useState} from "react";

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    return(
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span  className="stopwatch-time">0</span>
        <button onClick={()=> setIsRunning((prevValue)=> !prevValue )}>
            {isRunning? "stop" : "start"}
        </button>
        <button>Reset</button>
      </div>
    )
}
 export default Stopwatch