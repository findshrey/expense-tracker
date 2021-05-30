import React, { useContext } from 'react'

import ExpenseContext from './../context/ExpenseContext'

const Summary = () => {
   const { expenses } = useContext(ExpenseContext)

   const totalBalance = expenses.reduce((total, expense) => {
      return total + expense.amount
   }, 0)

   return (
      <section>
         <h2>Current Balance</h2>
         <div>{totalBalance}</div>
      </section>
   )
}

export default Summary