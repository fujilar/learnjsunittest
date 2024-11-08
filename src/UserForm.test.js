import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

test('it calls onUserAdd when the form is submitted', async () => {
    // NOT THE BEST IMPLEMENTATION
    // const argList = [];
    // const callback = (...args) => {
    //     argList.push(args);
    // };

    const mock = jest.fn();

    // Try to render my component
    render(<UserForm onUserAdd={mock} />);

    // Find the two inputs
    // const [nameInput, emailInput] = screen.getAllByRole('textbox');

    const nameInput = screen.getByRole('textbox', { 
        name: /name/i,
    });

    const emailInput = screen.getByRole('textbox', {
        name: /email/i,
    });

    // Find the button
    const button = screen.getByRole('button');

    // Simulate typing in a name
    user.click(nameInput);
    user.keyboard('John Doe');

    // Simulate typing in an email
    user.click(emailInput);
    user.keyboard('john@hotmail');


    // Simulate clicking the button
    user.click(button);

    // fire event test
    // fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    // fireEvent.change(emailInput, { target: { value: 'john@hotmail' } });
    // fireEvent.click(button);


    // Assertion to make sure 'onUserAdd' gets called with email and name
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({ name: 'John Doe', email: 'john@hotmail' });
    
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@hotmail' });
    

});

test('empties the two inputs when form is submitted', () => {
    render(<UserForm onUserAdd={() => {}} />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard('John Doe');
    user.click(emailInput);
    user.keyboard('john@hotmail.com');
    
    user.click(button);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');

});