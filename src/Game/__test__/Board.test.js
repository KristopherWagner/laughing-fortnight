import Board from '../Board';
import { create } from 'react-test-renderer';

jest.mock('../Square', () => ((props) => <div {...props} />));

const squares = ['X', '', '', '', '', '', '', '', ''];

describe('Board component unit tests', () => {
  it('renders without crashing', () => {
    const board = create(<Board squares={squares} />);
    board.unmount();
  });

  it ('handles square clicks', () => {
    const onClick = jest.fn();
    const board = create(<Board onClick={onClick} squares={squares} />);
    board.root.findByProps({ value: 'X' }).props.onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
    board.unmount();
  });
});