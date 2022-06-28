import { render } from '@testing-library/react';
import CommentsForm from './comments-form';
describe('CommentsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommentsForm />);
    expect(baseElement).toBeTruthy();
  });
});
