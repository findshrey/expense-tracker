import React, { useState, useContext } from 'react'

import ExpenseContext from './../context/ExpenseContext'
import ExpenseItem from './ExpenseItem'

const filterExpenses = (expenses, filterBy) => {
   if (filterBy === 'income') {
      return expenses.filter((expense) => expense.amount > 0)
   } else if (filterBy === 'expense') {
      return expenses.filter((expense) => expense.amount < 0)
   } else {
      return expenses
   }
}

const ExpenseList = () => {
   const [filterBy, setFilterBy] = useState('all')
   const {
      expenses: ctxExpenses,
      handleRemoveExpense: ctxRemoveExpense
   } = useContext(ExpenseContext)

   const handleFilter = (option) => setFilterBy(option)

   const renderedExpenses = filterExpenses(ctxExpenses, filterBy)

   return (
      <section className="expense-list">
         <div className="container">
            <header>
               <h2>All Transactions</h2>
            </header>
            <div className="expense-list-actions">
               <button onClick={() => handleFilter('all')}>All</button>
               <button onClick={() => handleFilter('income')}>Income</button>
               <button onClick={() => handleFilter('expense')}>Expense</button>
            </div>
            <ul className="expense-list-inner">
               {
                  renderedExpenses.map((expense) => (
                     <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        ctxRemoveExpense={ctxRemoveExpense}
                     />
                  ))
               }
            </ul>
         </div>
      </section>
   )
}

export default ExpenseList