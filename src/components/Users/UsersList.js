import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

export default function UsersList(props) {
    return (
        <Card className="users-list">
            <ul>
                {props.users.map((user) => {
                    return (
                        <li key={user.id}>
                            <p>name - {user.name}</p>
                            <p>email - {user.email}</p>
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
}
