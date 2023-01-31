import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uEmail) => {
        setUsersList((prevList) => {
            return [
                ...prevList,
                { name: uName, email: uEmail, id: Math.random().toString() },
            ];
        });
    };

    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler}></AddUser>
            <UsersList users={usersList}></UsersList>
        </div>
    );
}

export default App;
