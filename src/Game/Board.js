import React from 'React';
import Square from './Square';

export default function Board({ onClick, squares }) {
  return (
    <div>
      {[0, 1, 2].map((i) => (
        <div className='board-row' key={`row-${i}`}>
          {[0, 1, 2].map((j) => {
            const key = i*3+j;
            return (
              <Square
                key={`square-${key}`}
                onClick={() => onClick(key)}
                value={squares[key]}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}