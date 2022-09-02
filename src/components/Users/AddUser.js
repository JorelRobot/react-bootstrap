import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        
        
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card>
            <form onSubmit={addUserHandler} className='needs-validation' noValidate>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={enteredUsername} onChange={usernameChangeHandler} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age (Years)</label>
                    <input type="number" className="form-control" id="age" value={enteredAge} onChange={ageChangeHandler} required/>
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;