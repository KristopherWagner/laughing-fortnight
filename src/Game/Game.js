import React, {
    Component
} from 'react';
import './Game.css'

function Square(props) {
    return (
        <button className="square" onClick={()=> props.onClick()}>
          {props.value}
        </button>
    );
}

class Board extends Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
    }

    render() {
        let jsx = [];
        for (let i = 0; i < 3; i++) {
            let row = [];

            for (let j = i * 3; j < (i + 1) * 3; j++) {
                row.push(this.renderSquare(j));

            }
            jsx.push(row);
        }

        return (
            <div>
              <div className="board-row">
                {jsx[0]}
              </div>
              <div className="board-row">
                {jsx[1]}
              </div>
              <div className="board-row">
                {jsx[2]}
              </div>
            </div>
        );
    }
}

export default class Game extends Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner + '!';
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = history.map((step, move) => {
            const desc = move ?
                'Move #' + move :
                'Game start';
            return (
                <li key={move}>
                    <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });

        return (
            <div className="game">
              <div className="game-board">
                  <Board 
                      squares={current.squares}
                      onClick={(i) => this.handleClick(i)}
                  />
              </div>
              <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
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
        [2, 4, 6] // top right to bot left
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
