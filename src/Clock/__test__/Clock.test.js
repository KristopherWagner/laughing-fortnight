import Clock from '../Clock';
import { create } from 'react-test-renderer';

describe('Clock unit tests', () => {
  it('renders without crashing', () => {
    const clock = create(<Clock key={0} />);
    clock.update(<Clock key={1} />);
    clock.unmount();
  });
});