import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isEnteredUsernameValid, setIsEnteredUsernameValid] = useState('true');
    const [isEnteredAgeValid, setIsEnteredAgeValid] = useState('true');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            
            if (enteredUsername.trim().length === 0) setIsEnteredUsernameValid(false);
            if (enteredAge.trim().length === 0) setIsEnteredAgeValid(false);

            return;
        }

        if (+enteredAge < 1) {
            setIsEnteredUsernameValid(false);
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) setIsEnteredUsernameValid(true);
        else setIsEnteredUsernameValid(false);
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        if (event.target.value.trim().length > 0 && +event.target.value > 0 && +event.target.value < 150) setIsEnteredAgeValid(true);
        else setIsEnteredAgeValid(false);
        setEnteredAge(event.target.value);
    }

    return (
        <Card>
            <form onSubmit={addUserHandler} className='needs-validation' noValidate>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className={`${'form-control'} ${!isEnteredUsernameValid && 'is-invalid'}`} id="username" value={enteredUsername} onChange={usernameChangeHandler} required />
                    {!isEnteredUsernameValid ? <div className="invalid-feedback">Please, write a valid username</div> : ''}
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age (Years)</label>
                    <input type="number" className={`${'form-control'} ${!isEnteredAgeValid && 'is-invalid'}`} id="age" value={enteredAge} onChange={ageChangeHandler} required />
                    {!isEnteredAgeValid ? <div className="invalid-feedback">Please, write a valid age</div> : ''}
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;