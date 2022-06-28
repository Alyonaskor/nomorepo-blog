import { render } from '@testing-library/react';
import AdjacentPosts from './adjacent-posts';
describe('AdjacentPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdjacentPosts />);
    expect(baseElement).toBeTruthy();
  });
});
