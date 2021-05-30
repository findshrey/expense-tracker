import React, { useContext } from 'react'

import ExpenseContext from './../context/ExpenseContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
   const { expenses, handleRemoveExpense } = useContext(ExpenseContext)

   return (
      <section className="expense-list">
         <h2>All Transactions</h2>
         <ul className="expense-list-inner">
            {
               expenses.map((expense) => (
                  <ExpenseItem
                     key={expense.id}
                     expense={expense}
                     handleRemoveExpense={handleRemoveExpense}
                  />
               ))
            }
         </ul>
      </section>
   )
}

export default ExpenseList