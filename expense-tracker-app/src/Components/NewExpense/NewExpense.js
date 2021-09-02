import './NewExpense.css';
import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const expensesAddHandler = (enteredExpenses) => {
        const expenseData = {
            id: Math.random().toFixed(2).toString(),
            ...enteredExpenses
        };
        console.log("New Expenses ");
        console.log(expenseData);
        props.onAppExpenseAdd(expenseData);
        setIsEditing(false);
    }
    const startEditing = () => {
        setIsEditing(true);
    }
    const stopEditing = () => {
        setIsEditing(false);
    }

    return (<div className='new-expense'>

        {!isEditing && (<button onClick={startEditing}>Add Expense</button>)}

        {isEditing && <NewExpenseForm onExpenseAdd={expensesAddHandler} onCancel={stopEditing} />}
    </div>);
};

export default NewExpense;