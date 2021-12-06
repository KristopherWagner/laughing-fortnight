export default function calculateWinner(squares) {
  let winner = null;
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // mid row
    [6, 7, 8], // bot row
    [0, 3, 6], // left col
    [1, 4, 7], // mid col
    [2, 5, 8], // right col
    [0, 4, 8], // top left to bot right
    [2, 4, 6], // top right to bot left
  ];

  for (let i = 0; i < lines.length && winner == null; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
    }
  }
  return winner;
}