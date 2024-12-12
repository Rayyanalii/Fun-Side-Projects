import { useEffect, useState } from 'react'

function SimpleTicTacToe({ id, isStarted, currentTurn, setCurrentTurn, setPlayableBox, playableBox, setMainBoxes, mainBoxes }) {
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
    const [conclusion, setConclusion] = useState("")
    const [winningCombo, setWinningCombo] = useState([]);

    useEffect(() => {
        setWinningCombo([])
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
        setConclusion("")
    }, [isStarted])




    function handleGameBoxClick(e) {
        const boxID = e.target.id;
        if (isStarted && !boxes[boxID] && !conclusion) {

            setBoxes((prevBoxes) => {
                const updated = {
                    ...prevBoxes,
                    [boxID]: currentTurn,
                }
                setPlayableBox(boxID);
                const res = checkStatus(updated);
                if (res == "win") {
                    setMainBoxes((prev) => {
                        return {
                            ...prev,
                            [id]: currentTurn,
                        }
                    })
                    setConclusion("win")
                }
                else if (res == "draw") {
                    setMainBoxes((prev) => {
                        return {
                            ...prev,
                            [id]: "Draw",
                        }
                    })
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
            <div className="main-game flex flex-col gap-5 mt-8 justify-center relative">
                {playableBox != id && playableBox != "all" && !mainBoxes[playableBox] && playableBox != "Draw" && <div className='absolute bg-opacity-40 bg-gray-500 w-full h-full rounded-md'></div>}
                <div className="row flex justify-center gap-5 w-full">
                    <div id="0" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[0]}</div>
                    <div id="1" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[1]}</div>
                    <div id="2" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[2]}</div>
                </div>
                <div className="row flex justify-center gap-5 w-full">
                    <div id="3" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[3]}</div>
                    <div id="4" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[4]}</div>
                    <div id="5" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[5]}</div>
                </div>
                <div className="row flex justify-center gap-5 w-full">
                    <div id="6" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[6]}</div>
                    <div id="7" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[7]}</div>
                    <div id="8" className={!isStarted ? 'notStartedBoxProp' : 'startedBoxProp'} onClick={handleGameBoxClick}>{isStarted && boxes[8]}</div>
                </div>

            </div>
        </>
    )
}

export default SimpleTicTacToe
