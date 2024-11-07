import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

test('can recieve a new user and show it on a list', () => {
    render(<App />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard('John Doe');
    user.click(emailInput);
    user.keyboard('john@hotmail.com');
    user.click(button);
    
    // screen.debug(); // to check the output of the screen

    const name = screen.getByRole('cell', { name: 'John Doe' });
    const email = screen.getByRole('cell', { name: 'john@hotmail.com' });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
});