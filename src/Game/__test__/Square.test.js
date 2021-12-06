import { create } from 'react-test-renderer';
import Square from '../Square';

describe('Square component unit tests', () => {
  it('renders without crashing', () => {
    const square = create(<Square />);
    square.unmount();
  });

  it('handles button clicks', () => {
    const onClick = jest.fn();
    const square = create(<Square onClick={onClick} />);
    square.root.findByProps({ className: 'square' }).props.onClick();
    expect(onClick).toHaveBeenCalledTimes(1);
    square.unmount();
  });
});