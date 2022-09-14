import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import UserCreatedToast from "./UserCreatedToast";

import * as bootstrap from 'bootstrap';

const usernameReducer = (prevState, action) => {
    if (action.type === 'SET_USERNAME') {
        return { value: action.val, isValid: prevState.isValid };
    }

    if (action.type === 'SET_IS_VALID') {
        return { value: prevState, isValid: action.val };
    }

    return { value: '', isValid: false }
};

const AddUser = (props) => {
    // const [enteredUsername, setEnteredUsername] = useState('');
    //const [isEnteredUsernameValid, setIsEnteredUsernameValid] = useState('true');

    const [enteredAge, setEnteredAge] = useState('');
    const [isEnteredAgeValid, setIsEnteredAgeValid] = useState('true');

    const [usernameState, dispatchUsername] = useReducer(usernameReducer, { value: '', isValid: true });

    const [usernameText, setUsernameText] = useState('Hola malnacido');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (usernameState.value.trim().length === 0 || enteredAge.trim().length === 0) {

            if (usernameState.value.trim().length === 0) /* setIsEnteredUsernameValid(false); */ dispatchUsername({ type: 'SET_IS_VALID', val: false });
            if (enteredAge.trim().length === 0) setIsEnteredAgeValid(false);

            return;
        }

        if (+enteredAge < 1) {
            // setIsEnteredUsernameValid(false);
            dispatchUsername({ type: 'SET_IS_VALID', val: false });
            return;
        }

        props.onAddUser(usernameState.value, enteredAge);

        setUsernameText(usernameState.value);

        showToast();

        // setEnteredUsername('');
        dispatchUsername({ type: 'SET_USERNAME', val: '' });
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        //if (event.target.value.trim().length > 0) setIsEnteredUsernameValid(true);
        //else setIsEnteredUsernameValid(false);
        //setEnteredUsername(event.target.value);

        if (event.target.value.trim().length > 0) dispatchUsername({ type: 'SET_IS_VALID', val: true });
        else dispatchUsername({ type: 'SET_IS_VALID', val: false });
        dispatchUsername({ type: 'SET_USERNAME', val: event.target.value });
    };

    const ageChangeHandler = (event) => {
        if (event.target.value.trim().length > 0 && +event.target.value > 0 && +event.target.value < 150) setIsEnteredAgeValid(true);
        else setIsEnteredAgeValid(false);
        setEnteredAge(event.target.value);
    }

    const showToast = () => {
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);

        toast.show();
    };

    return (
        <>
            {ReactDOM.createPortal(<UserCreatedToast id='liveToast' username={usernameText} />, document.getElementById('user-created-toast'))}
            <Card>
                <form onSubmit={addUserHandler} className='needs-validation' noValidate>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className={`${'form-control'} ${!usernameState.isValid && 'is-invalid'}`}
                            id="username"
                            value={usernameState.value}
                            onChange={usernameChangeHandler}
                            required />
                        {!usernameState.isValid ? <div className="invalid-feedback">Please, write a valid username</div> : ''}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age (Years)</label>
                        <input
                            type="number"
                            className={`${'form-control'} ${!isEnteredAgeValid && 'is-invalid'}`}
                            id="age"
                            value={enteredAge}
                            onChange={ageChangeHandler}
                            required />
                        {!isEnteredAgeValid ? <div className="invalid-feedback">Please, write a valid age</div> : ''}
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};


export default AddUser;