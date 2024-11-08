import { useState } from 'react';

function UserForm({ onUserAdd }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onUserAdd({ name, email });
        // console.log('Name:', name);
        // console.log('Email:', email);

        setEmail('');
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button>Add User</button>
        </form>
    )
}

export default UserForm;


// import { useState } from 'react';

// const styles = {
//     container: { margin: '20px' },
//     label: { marginBottom: '10px', display: 'block' },
//     input: { padding: '5px', fontSize: '16px', width: '100%' },
// };

// function UserForm() {
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (!name.trim() || !email.trim() || !age.trim()) {
//             alert('Both fields are required')
//             return;
//         }
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Age:', age);
//         setSubmitted(true);

//         setName('');
//         setEmail('');
//         setAge('');

//     };

//     return (
//         <form onSubmit={handleSubmit} style={styles.container}>
//             {submitted && <p>User added successfully</p>}
//             <div style={styles.input}>
//                 <label style={styles.label}>Name</label>
//                 <input value={name} onChange={(e) => setName(e.target.value)} />
//             </div>
//             <div style={styles.input}>
//                 <label style={styles.label}>Email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} />
//             </div>
//             <div style={styles.input}>
//                 <label style={styles.label}>Age</label>
//                 <input value={age} onChange={(e) => setAge(e.target.value)} />
//             </div>
//             <button>Add User</button>
//         </form>
//     )
// }

// export default UserForm;


// function UserForm() {
//     // const isLoggedIn = true;
//     // let message;

//     // if (isLoggedIn) {
//     //     message = <p>Welcome back!</p>;
//     // } else {
//     //     message = <p>Please log in</p>;
//     // }

//     // return (
//     //     <div>
//     //         {message}
//     //     </div>
//     // );

//     // const isLoggedIn = false;
    
//     // return (
//     //     <div>
//     //         {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
//     //     </div>
//     // );
// }

// export default UserForm;

// function UserForm({ showWarning }) {
        
//         return (
//             <div>
//                 {showWarning && <p>Warning: You are offline</p>}
//             </div>
//         );
//     }
    
//     export default UserForm;

