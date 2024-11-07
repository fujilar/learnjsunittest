import { render, screen, within }  from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
    const users = [
        { name: 'John Doe', email: 'john@hotmail.com' },
        { name: 'Jane Doe', email: 'jane@hotmail.com' }
    ];
    render(<UserList users={users} />);

    return {
        users,
    };
}

test('render one row per user', () => {

    renderComponent(); // render(<UserList users={users} />);
    
    // render(<UserList users={users} />);

    

    // screen.logTestingPlaygroundURL();

    // const rows = screen.getAllByRole('row');

    // const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // expect(rows).toHaveLength(2);

    // const { container } = render(<UserList users={users} />); // query selector method 

    // this line disable error for the next line
    // eslint-disable-next-line
    // const rows = container.querySelectorAll('tbody tr');

    // expect(rows).toHaveLength(2);
    
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    expect(rows).toHaveLength(2);

});

test('render the name and email of each user', () => {
    const { users } = renderComponent(); // render(<UserList users={users} />);

    for (let user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }

});