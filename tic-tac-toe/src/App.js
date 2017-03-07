import React, {
    Component
} from 'react';

function Square(props) {
    return (
        <button className="square" onClick={()=> props.onClick()}>
          {props.value}
        </button>
    );
}

class Board extends Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner + '!';
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
        );
    }
}

export default class Game extends Component {
    render() {
        return (
            <div className="game">
              <div className="game-board">
                <Board />
              </div>
              <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
              </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
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

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
