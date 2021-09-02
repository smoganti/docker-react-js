import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js'

import './ExpenseItem.css';


function ExpenseItem(props){

//   const [title,setTitle]  = useState(props.title);

//     const clickHandler = () => {
//         setTitle('new updated');
//         alert('clicked');
//     }


    return (<Card className='expense-item'> 
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{props.title}</h2></div>
        <div className = 'expense-item__price'>${props.price}</div>
        {/* <button onClick={clickHandler}>Click me !!</button> */}
    </Card>);
};

export default ExpenseItem;