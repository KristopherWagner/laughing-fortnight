import React, { useState } from 'react';
import './Game.css';

import calculateWinner from './calculateWinner';

function Square({ onClick, value }) {
  return (
    <button
      className='square'
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Board({ onClick, squares }) {
  const renderSquare = (i) => (
    <Square key={`square-${i}`} onClick={() => onClick(i)} value={squares[i]} />
  );

  return (
    <div>
      {[0, 1, 2].map((i) => (
        <div className='board-row' key={`row-${i}`}>
          {[0, 1, 2].map((j) => renderSquare(i*3+j))}
        </div>
      ))}
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const h = history.slice(0, stepNumber + 1);
    const current = h[h.length - 1];
    const squares = current.squares.slice();

    if (!(calculateWinner(squares) || squares[i])) {
      squares[i] = xIsNext ? 'X' : 'O';

      setHistory(h.concat([{ squares }]));
      setStepNumber(h.length);
      setXIsNext(!xIsNext);
    }
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 ? false : true);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const status = winner ? `Winner: ${winner}!` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const moves = history.map((step, move) => (
    <li key={move}>
      <a /* eslint-disable-line jsx-a11y/anchor-is-valid */
        href='#'
        onClick={() => jumpTo(move)}>
        {move ? `Move #${move}` : 'Game start'}
      </a>
    </li>
  ));

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <div>{moves}</div>
      </div>
    </div>
  );
}
