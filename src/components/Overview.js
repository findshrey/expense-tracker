import React, { useContext } from 'react'

import ExpenseContext from '../context/ExpenseContext'

const Overview = () => {
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
      <section className="overview">
         <div className="container">
            <div className="overview-upper">
               <h4>Current Balance</h4>
               <strong>₹{totalBalance.toFixed(2)}</strong>
            </div>
            <div className="overview-lower">
               <div className="lower-inner">
                  <h4>Income</h4>
                  <strong>₹{totalIncome.toFixed(2)}</strong>
               </div>
               <div className="lower-inner">
                  <h4>Expense</h4>
                  <strong>₹{Math.abs(totalExpense).toFixed(2)}</strong>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Overview