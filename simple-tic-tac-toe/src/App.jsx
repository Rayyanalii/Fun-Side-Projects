import { useState } from 'react'

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [currentTurn, setCurrentTurn] = useState("")
  const [boxes, setBoxes] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  })
  const [message, setMessage] = useState("")
  const [conclusion, setConclusion] = useState("")
  const [winningCombo, setWinningCombo] = useState([]);

  function handleStartButton() {
    setIsStarted(true);
    const rand = Math.round(Math.random());
    rand == 0 ? setCurrentTurn("X") : setCurrentTurn("O")
  }

  function handleResetButton() {
    setIsStarted(false)
    setCurrentTurn("")
    setBoxes({
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    })
    setConclusion(false)
    setMessage("")
    setWinningCombo([])
  }

  function handleGameBoxClick(e) {
    const boxID = e.target.id;
    if (isStarted && !boxes[boxID] && !conclusion) {

      setBoxes((prevBoxes) => {
        const updated = {
          ...prevBoxes,
          [boxID]: currentTurn,
        }
        const res = checkStatus(updated);
        if (res == "win") {
          setMessage(`Wins`)
          setConclusion("win")
        }
        else if (res == "draw") {
          setMessage("Game Drawn")
          setConclusion("draw")
          if (currentTurn == "X") {
            e.target.className += " text-cyan-400"
          }
          else {
            e.target.className += " text-yellow-400"
          }
        }
        else {
          if (currentTurn == "X") {
            e.target.className += " text-cyan-400"
            setCurrentTurn("O")
          }
          else {
            e.target.className += " text-yellow-400"
            setCurrentTurn("X")
          }
        }
        return updated;

      });

    }
  }

  function checkStatus(boxes) {

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    let winMatch = false;
    winningCombos.map((win, index) => {
      if (boxes[win[0]] == currentTurn && boxes[win[0]] == boxes[win[1]] && boxes[win[1]] == boxes[win[2]]) {
        setWinningCombo(win);
        winMatch = true;
      }
    })
    if (winMatch) {
      return "win"
    }

    let draw = true;
    for (const key in boxes) {
      if (Object.prototype.hasOwnProperty.call(boxes, key)) {
        const element = boxes[key];
        if (element == "") {
          draw = false;
        }
      }
    }
    if (draw) {
      return "draw"
    }
    else {
      return "play"
    }
  }


  return (
    <>
      <div className='min-h-screen flex justify-center items-center bg-purple-600'>
        <div className="card bg-purple-950 rounded-md sm:px-14 px-6 max-w-max w-full pb-8">
          <div className="title text-center text-white font-bold text-4xl mt-3">
            Tic Tac Toe
          </div>
          <div className='w-full h-px bg-slate-400 mt-4'></div>
          {isStarted && !conclusion && <div>
            <h3 className='text-center text-white mt-4 font-semibold text-2xl '><span className={currentTurn == "X" ? 'text-cyan-400 text-3xl' : 'text-yellow-400 text-3xl'}>{currentTurn}</span>'s Turn</h3>
          </div>}
          {conclusion == "win" && <div>
            <h3 className='text-center text-white mt-4 font-semibold text-2xl '><span className={currentTurn == "X" ? 'text-cyan-400 text-3xl' : 'text-yellow-400 text-3xl'}>{currentTurn} </span>{message}</h3>
          </div>}
          {conclusion == "draw" && <div>
            <h3 className='text-center text-white mt-4 font-semibold text-2xl underline'>{message}</h3>
          </div>}
          <div className="main-game flex flex-col gap-5 mt-8 justify-center">
            <div className="row flex justify-center gap-5 w-full">
              <div id="0" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(0) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[0]}</div>
              <div id="1" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(1) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[1]}</div>
              <div id="2" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(2) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[2]}</div>
            </div>
            <div className="row flex justify-center gap-5 w-full">
              <div id="3" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(3) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[3]}</div>
              <div id="4" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(4) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[4]}</div>
              <div id="5" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(5) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[5]}</div>
            </div>
            <div className="row flex justify-center gap-5 w-full">
              <div id="6" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(6) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[6]}</div>
              <div id="7" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(7) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[7]}</div>
              <div id="8" className={!isStarted ? 'notStartedBoxProp' : winningCombo.includes(8) ? 'winningBox' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[8]}</div>
            </div>
          </div>
          <div className="buttons flex justify-center gap-10 mt-10">
            <button className={!isStarted ? 'bg-green-600 rounded-lg text-white font-bold p-2 px-4 hover:bg-green-800 transition' : 'bg-slate-500 rounded-lg text-white font-bold p-2 px-4'} onClick={handleStartButton} disabled={isStarted ? true : false}>
              Start
            </button>
            <button className='bg-red-600 rounded-lg text-white font-bold p-2 px-4 hover:bg-red-800 transition' onClick={handleResetButton}>
              Reset
            </button>
          </div>
          <p className='text-sm text-white font-semibold  text-right'>Made by <a href='https://github.com/Rayyanalii' target="_blank" className='italic'>Rayyanalii</a></p>
        </div>
      </div>
    </>
  )
}

export default App
