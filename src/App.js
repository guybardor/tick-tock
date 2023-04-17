import React, { useState } from 'react';
import './App.css';

function Square({value,onSquareclick}) {
  return <button className='square' onClick={onSquareclick}>{value}</button> 
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function Board(props)
{
  const [xIsNext, setXIsNext] = useState(true);
  const [Squares,setSquares] = useState(Array(9).fill(null))
  const [running, setRunning] = useState(true)

  function handleClick(i) 
  {

    if(!running || Squares[i]) return
    const nextSquares = Squares.slice();
    xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O'
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
    props.addHistory(nextSquares)
    const winner = calculateWinner(nextSquares)
    if(winner){
      alert(winner + " Has Won !")
      setRunning(false)
    }

  }

  return(
    
    <>
      <div className="board-row">
        <Square  value={Squares[0]} onSquareclick={() => handleClick(0)} />
        <Square  value={Squares[1]} onSquareclick={() => handleClick(1)} />
        <Square  value={Squares[2]} onSquareclick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square  value={Squares[3]} onSquareclick={() => handleClick(3)}/>
        <Square  value={Squares[4]} onSquareclick={() => handleClick(4)}/>
      <Square   value={Squares[5]} onSquareclick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square   value={Squares[6]} onSquareclick={() => handleClick(6)}/>
        <Square  value={Squares[7]} onSquareclick={() => handleClick(7)}/>
        <Square  value={Squares[8]} onSquareclick={() => handleClick(8)}/>
      </div>
    </>
  );
}


export default function Game() 
{
  const [history, setHistory] = useState([])

  const addHistory = (move) => {
    history.push(move)
    setHistory(history.slice())
  }

  const generateHistory = () => {
    return(
      <ol>
        {
          history.map((move, index) => {
            let moveString = ""
            moveString += move.map((val) => {
              return val ? val + " " : "null "
            })
            return <p key={index}>{moveString}</p>
          })
        }
      </ol>
    )
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board addHistory = {addHistory}/>
      </div>
      <div className="game-info">
        {generateHistory()}
      </div>
    </div>
  );
}