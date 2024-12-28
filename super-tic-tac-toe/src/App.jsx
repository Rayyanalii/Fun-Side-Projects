import { useEffect, useState } from 'react'
import './App.css'
import SimpleTicTacToe from './components/simple-tic-tac-toe'

function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [currentTurn, setCurrentTurn] = useState("none")
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
  const [playableBox, setPlayableBox] = useState("all")

  function handleStartButton() {
    setIsStarted(true);
    const rand = Math.round(Math.random());
    rand == 0 ? setCurrentTurn("X") : setCurrentTurn("O")
  }

  function handleResetButton() {
    setIsStarted(false)
    setCurrentTurn("none")
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
    setPlayableBox("all")
  }

  useEffect(() => {
    const res = checkStatus(boxes)
    if (res == "win") {
      setMessage(`Wins`)
      setConclusion("win")
      setPlayableBox("none")
    }
    else if (res == "draw") {
      setMessage("Game Drawn")
      setConclusion("draw")

    }
    else {
      if (currentTurn == "X") {
        setCurrentTurn("O")
      }
      else {
        setCurrentTurn("X")
      }
    }

  }, [boxes])

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
      <div className='min-h-screen flex justify-center items-center bg-purple-600 '>
        <div className="card bg-purple-950 rounded-md lg:px-14 px-7 max-w-max w-full pb-8">
          <div className="title text-center text-white font-bold text-4xl mt-3">
            Super Tic Tac Toe
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
          <div className="main-game flex flex-col lg:gap-5 mt-8 justify-center relative">
            <div className="row flex justify-center lg:gap-20 gap-8 w-full">

              {boxes[0] && boxes[0] != "Draw" ? <>
                <div className={`  flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[0] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[0]}</div></div>
              </> : <SimpleTicTacToe id={0} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

              {boxes[1] && boxes[1] != "Draw" ? <>
                <div className={`  flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[1] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[1]}</div></div>
              </> : <SimpleTicTacToe id={1} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

              {boxes[2] && boxes[2] != "Draw" ? <>
                <div className={` flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[2] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[2]}</div></div>
              </> : <SimpleTicTacToe id={2} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

            </div>
            <div className="row flex justify-center lg:gap-20 gap-8 w-full">

              {boxes[3] && boxes[3] != "Draw" ? <>
                <div className={`flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[3] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[3]}</div></div>
              </> : <SimpleTicTacToe id={3} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

              {boxes[4] && boxes[4] != "Draw" ? <>
                <div className={`flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[4] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[4]}</div></div>
              </> : <SimpleTicTacToe id={4} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

              {boxes[5] && boxes[5] != "Draw" ? <>
                <div className={`flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[5] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[5]}</div></div>
              </> : <SimpleTicTacToe id={5} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

            </div>
            <div className="row flex justify-center lg:gap-20 gap-8 w-full">

              {boxes[6] && boxes[6] != "Draw" ? <>
                <div className={`flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[6] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[6]}</div></div>
              </> : <SimpleTicTacToe id={6} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

              {boxes[7] && boxes[7] != "Draw" ? <>
                <div className={`flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[7] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[7]}</div></div>
              </> : <SimpleTicTacToe id={7} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

              {boxes[8] && boxes[8] != "Draw" ? <>
                <div className={`flex lg:w-[10rem] lg:h-[10rem] w-[8.5rem] h-[8.5rem] justify-center items-center lg:text-6xl text-5xl font-bold bg-red-500 mt-10 rounded-lg ${boxes[8] == "X" ? 'text-cyan-400' : 'text-yellow-400'}`}><div>{boxes[8]}</div></div>
              </> : <SimpleTicTacToe id={8} isStarted={isStarted} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} setPlayableBox={setPlayableBox} playableBox={playableBox} setMainBoxes={setBoxes} mainBoxes={boxes} />}

            </div>
            <div className="columndivider w-1 bg-slate-400 lg:h-[37rem] h-[30rem] absolute top-7 lg:left-[12.5rem] left-[9.4rem]"></div>
            <div className="columndivider w-1 bg-slate-400 lg:h-[37rem] h-[30rem] absolute top-7 lg:right-[12.5rem] right-[9.4rem]"></div>
            <div className="columndivider h-1 bg-slate-400 lg:w-[40rem] w-[29.5rem] absolute lg:top-[13.5rem] top-[11.5rem]"></div>
            <div className="columndivider h-1 bg-slate-400 lg:w-[40rem] w-[29.5rem] absolute lg:bottom-[11.5rem] bottom-[9.3rem]"></div>
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
