import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  
  const [time, setTime] = useState(0); // Timer value in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };
  const refreshTimer=()=>{
    setTime(0); 
    setIsRunning(false); 
  }
  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;

  };

  return (
    <div className="timer-container">
      <h1>React Timer</h1>
      <div className="timer-display">
         {formatTime(time).split('').map((char, index) => {
          return char === ':' ? (
            <div key={index} className="colon">:</div>
          ) : (
            <div key={index} className="digit-box">{char}</div>
          );
        })}
      </div>
      <div className="timer-controls">
        <button onClick={startTimer} className="start-button">Start</button>
        <button onClick={stopTimer} className="stop-button">Stop</button>
        <button onClick={refreshTimer} className="refresh-button">Refresh</button>
      </div>
    </div>
  );
};


export default App;
// import './App.css';
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [time, setTime] = useState(0); // Timer value in seconds
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(timer);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning]);

//   const startTimer = () => {
//     setIsRunning(true);
//   };

//   const stopTimer = () => {
//     setIsRunning(false);
//   };

//   const refreshTimer = () => {
//     setTime(0); 
//     setIsRunning(false); 
//   };

//   const formatTime = (time) => {
//     const hours = String(Math.floor(time / 3600)).padStart(2, "0");
//     const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
//     const seconds = String(time % 60).padStart(2, "0");
//     return ${hours}:${minutes}:${seconds};
//   };

//   return (
//     <div className="timer-container">
//       <h1>React Timer</h1>
//       <div className="timer-display">
//         {formatTime(time).split('').map((char, index) => {
//           return char === ':' ? (
//             <div key={index} className="colon">:</div>
//           ) : (
//             <div key={index} className="digit-box">{char}</div>
//           );
//         })}
//       </div>
//       <div className="timer-controls">
//         <button onClick={startTimer} className="start-button">Start</button>
//         <button onClick={stopTimer} className="stop-button">Stop</button>
//         <button onClick={refreshTimer} className="refresh-button">Refresh</button>
//       </div>
//     </div>
//   );
// }

// export default App;