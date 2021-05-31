import React from 'react'

const ExpenseItem = ({ expense, handleRemoveExpense }) => {
   const day = expense.date.toLocaleString('en-US', { day: '2-digit' })
   const month = expense.date.toLocaleString('en-US', { month: 'long' })
   const year = expense.date.getFullYear()

   return (
      <li className="expense-item">
         <div className="expense-info">
            <h4>{expense.title}</h4>
            <span>{`${day} - ${month} - ${year}`}</span>
         </div>
         <span>{expense.amount.toFixed(2)}</span>
         {/* <button onClick={() => handleRemoveExpense(expense.id)}>Remove</button> */}
      </li>
   )
}

export default ExpenseItem