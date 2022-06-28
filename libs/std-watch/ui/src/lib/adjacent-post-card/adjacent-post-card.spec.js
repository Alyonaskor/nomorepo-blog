import { render } from '@testing-library/react';
import AdjacentPostCard from './adjacent-post-card';
describe('AdjacentPostCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdjacentPostCard />);
    expect(baseElement).toBeTruthy();
  });
});
