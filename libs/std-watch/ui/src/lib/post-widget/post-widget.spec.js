import { render } from '@testing-library/react';
import PostWidget from './post-widget';
describe('PostWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostWidget />);
    expect(baseElement).toBeTruthy();
  });
});
