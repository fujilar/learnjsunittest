import  { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return <div>
    <UserForm onUserAdd={onUserAdd} />
    {/* <UserForm  showWarning={true}/> */}
    <hr />
    <UserList users={users} />
  </div>
}

export default App;
