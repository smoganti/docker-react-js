import React,{useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
const [selectedYear,setFilteredYear] = useState('2020');

  const expensesYearChanged = (changedYear) => {
    setFilteredYear(changedYear);

  };
  const filteredExpenses = props.expenses.filter(e => (e.date.getFullYear().toString() === selectedYear));
  console.log(filteredExpenses);
  return <Card className='expenses'>
    <ExpenseFilter filteredYear={selectedYear} onChangedYear={expensesYearChanged} />
    <ExpenseChart expenses={filteredExpenses}/>
    <ExpensesList filteredList={filteredExpenses} />
  </Card>
}


export default Expenses;