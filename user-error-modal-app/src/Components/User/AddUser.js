import React, { useState } from 'react';
import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredAge: ''
    });
    const [error, setError] = useState();
    const onAddUserHandler = (event) => {
        event.preventDefault();
        if (userInput.enteredName.trim().length === 0) {
            setError({
                title : 'Invalid Input',
                message : 'Please enter a valid Name and age (non-empty values)'
            });
            return;
        }
        if (userInput.enteredAge.trim().length === 0 || userInput.enteredAge < 0) {
            setError({
                title : 'Invalid Age',
                message : 'Please enter a valid Age (> 0)'
            });
            return;
        }

        props.onAddUser(userInput.enteredName, userInput.enteredAge);

        setUserInput((prevState) => {
            return {
                enteredName: '',
                enteredAge: ''
            };
        });

    }

    const nameChangeHandler = (event) => {
        const nameChange = event.target.value;

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredName: nameChange
            };
        });
    };
    const ageChangeHandler = (event) => {
        const ageChange = event.target.value;

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAge: ageChange
            };
        });
    };

    const errorHandler = () => {
        setError(null);
      };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={onAddUserHandler}>
                    <label htmlFor='userName'>UserName</label>
                    <input id='userName' type='text' value={userInput.enteredName} onChange={nameChangeHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={userInput.enteredAge} onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>);
}


export default AddUser;