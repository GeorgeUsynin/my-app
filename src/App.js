import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { observer } from "mobx-react-lite";
import "./App.css";

function App() {

  const [users, setUsers] = React.useState([]);

  const createNewUser = (user) => {
    setUsers(prevUsers => ([{name: user.name, age: user.age, id: Math.random().toString()}, ...prevUsers]));
  };

  return (
    <div>
      <AddUser createNewUser={createNewUser}/>
      <UserList items={users} />
    </div>
  );
}

export default observer(App);
