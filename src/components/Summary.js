import React, { useContext } from 'react'

import ExpenseContext from './../context/ExpenseContext'

const Summary = () => {
   const { expenses } = useContext(ExpenseContext)

   let totalBalance = 0
   let totalIncome = 0
   let totalExpense = 0

   for (const item of expenses) {
      item.amount > 0 ?
         (totalIncome += item.amount) : (totalExpense += item.amount)

      totalBalance += item.amount
   }

   return (
      <section>
         <h2>Current Balance</h2>
         <div>{totalBalance.toFixed(2)}</div>
         <div>
            <h3>Income {totalIncome.toFixed(2)}</h3>
            <h3>Expense {totalExpense.toFixed(2)}</h3>
         </div>
      </section>
   )
}

export default Summary