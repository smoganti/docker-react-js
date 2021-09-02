import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if(props.filteredList.length === 0){
        return <h2 className='expenses-list__fallback'>No Items Found</h2>
    }
    else {
       return( <div className='expenses-list'>
        {props.filteredList.map((e) =>(
            <ExpenseItem key={e.id} date={e.date} title={e.description} price={e.price} />
          ))
          }
          </div>)
    }
    
    
}

export default ExpensesList;