import React from 'react';
import './ExpenseCard.css';

function ExpenseCards(props) {
  return (
    <div className='expensecard-wrapper' style={{backgroundColor:`${props.color}`, left:`${props.left}`, top:`${props.top}`}} >
        
    </div>
  )
}

export default ExpenseCards
