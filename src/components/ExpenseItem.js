import React from 'react'

const ExpenseItem = ({ expense, handleRemoveExpense }) => {
   const day = expense.date.toLocaleString('en-US', { day: '2-digit' })
   const month = expense.date.toLocaleString('en-US', { month: 'long' })
   const year = expense.date.getFullYear()

   return (
      <li>
         <div className="expense-info">
            <h3>{expense.title}</h3>
            <span>{expense.amount.toFixed(2)}</span>
         </div>
         <span>{`${day} - ${month} - ${year}`}</span>
         <button onClick={() => handleRemoveExpense(expense.id)}>Remove</button>
      </li>
   )
}

export default ExpenseItem