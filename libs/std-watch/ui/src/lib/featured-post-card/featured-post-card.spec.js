import { render } from '@testing-library/react';
import FeaturedPostCard from './featured-post-card';
describe('FeaturedPostCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturedPostCard />);
    expect(baseElement).toBeTruthy();
  });
});
