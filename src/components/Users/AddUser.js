import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

export default function AddUser(props) {
    const [eneteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [error, setError] = useState();

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        if (
            eneteredName.trim().length == 0 ||
            enteredEmail.trim().length == 0
        ) {
            setError({
                title: "Invalid Input",
                message: "email and name is required",
            });
            return;
        }
        if (enteredEmail.trim().includes("@") == false) {
            setError({
                title: "Invalid email",
                message: "please enter valid email",
            });
            return;
        }
        console.log(eneteredName, enteredEmail);
        props.onAddUser(eneteredName, enteredEmail);
        setEnteredEmail("");
        setEnteredName("");
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                ></ErrorModal>
            )}
            <Card className="add-user__form">
                <form onSubmit={addUserHandler} noValidate>
                    <div className="add-user__input">
                        <label htmlFor="Name">Name</label>
                        <input
                            value={eneteredName}
                            onChange={nameChangeHandler}
                            id="name"
                            type="text"
                        ></input>
                    </div>
                    <div className="add-user__input">
                        <label htmlFor="email">Email</label>
                        <input
                            value={enteredEmail}
                            onChange={emailChangeHandler}
                            id="email"
                            type="email"
                        ></input>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}
