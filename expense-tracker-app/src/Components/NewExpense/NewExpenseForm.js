import React, { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {


    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    })
    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    };
    const priceChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredPrice: event.target.value
            };
        });
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            };
        });
    }

    const submitHandler = (event) => {
        event.preventDefault(); //stops default behaviour of form to send info to server


            const expenseData = {
                date: new Date(userInput.enteredDate),
                description: userInput.enteredTitle,
                price: userInput.enteredPrice
            };
            console.log("Form");
            console.log(expenseData);
            props.onExpenseAdd(expenseData);

    };

    const formJsx = (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type='number' onChange={priceChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
            </div>
        </div>
        <div className='new-expense__actions'>
        <button type='submit' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>)

        return formJsx;
};

export default NewExpenseForm;