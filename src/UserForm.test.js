import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it show two inputs and a button', () => {
    // render the component
    render(<UserForm />);

    // Manipulate the component
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // Assertion = make sure the component is doing
    // what we expect to do it
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});