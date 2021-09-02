import React,{useState} from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DEFAULT_EXP = [
  {
    id : 'a1',
  date : new Date(2020,8,26),
    description : 'Groceries',
    price : 230.5
},
{
  id : 'a2',
  date : new Date(2021,3,22),
  description : 'Vegetables',
  price : 125.32
},
{
  id : 'a3',
  date : new Date(2021,8,21),
  description : 'Frozen Food',
  price : 89.76
},
{
  id : 'a4',
  date : new Date(2021,5,21),
  description : 'Frozen Food',
  price : 89.76
},
{
  id : 'a5',
  date : new Date(2019,4,15),
  description : 'Frozen Food',
  price : 89.76
}
]

function App() {

  const [updatedExpenses,setUpdatedExpenses] = useState(DEFAULT_EXP);

  const expenseAppAddHandler = (expenseData) => {
    
    setUpdatedExpenses((prevState) => {
      console.log(prevState);
      return [expenseData, ...prevState];
    })
  };

  return (
    <div>
      <NewExpense onAppExpenseAdd={expenseAppAddHandler}></NewExpense>
      <Expenses expenses={updatedExpenses}></Expenses>
      </div>
  );
}

export default App;
