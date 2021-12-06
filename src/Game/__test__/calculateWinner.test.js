import calculateWinner from '../calculateWinner';

describe('Calculate winner unit tests', () => {
  it('finds a winner', () => {
    const squares = ['X', 'X', 'X'];
    expect(calculateWinner(squares)).toBe('X');
  });

  it('does not find a winner', () => {
    const squares = [
      'X', 'X', 'O',
      'O', 'O', 'X',
      'X', 'X', 'O',
    ];
    expect(calculateWinner(squares)).toBeNull();
  });
});