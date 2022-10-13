import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import "./App.css";

function App() {

  const userNameInputRef = React.useRef();

  const [users, setUsers] = React.useState([]);

  const createNewUser = (user) => {
    setUsers(prevUsers => ([{name: user.name, age: user.age, id: Math.random().toString()}, ...prevUsers]));
  };

  const addFocusOnUserName = () => {
    userNameInputRef.current.activate();
  }

  return (
    <div>
      <AddUser createNewUser={createNewUser} ref={userNameInputRef}/>
      <UserList items={users} />
      <button onClick={addFocusOnUserName}>Click</button>
    </div>
  );
}

export default App;
