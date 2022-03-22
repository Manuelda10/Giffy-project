import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';


test('home work as expected', () => {
  render(<App />);
  const title = screen.getByText(/App/i);
  expect(title).toBeInTheDocument();
});

/* Se rompe por el deprecated
test('home work as expected 2', async () => {
    const { container } = render(<App />);
    const gifLink = await waitForElement(container.querySelector('.Gif-link'))
    expect(gifLink).toBeVisible();
});
*/

test('search form could be use', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button')

    fireEvent.change(input, { target: { value: 'Matrix' }});
    //Si tuviera botón:
    fireEvent.click(button);

    const title = await screen.findByText('Matrix');
    expect(title).toBeVisible();
})