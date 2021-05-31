import React, { useState, useContext } from 'react'

import ExpenseContext from '../context/ExpenseContext'

const ExpenseForm = () => {
   const [title, setTitle] = useState('')
   const [amount, setAmount] = useState('')
   const [date, setDate] = useState('')
   const [expenseType, setExpenseType] = useState('income')

   const { handleAddExpense } = useContext(ExpenseContext)

   const handleTitle = (e) => setTitle(e.target.value)
   const handleAmount = (e) => setAmount(e.target.value)
   const handleDateChange = (e) => setDate(e.target.value)
   const handleExpenseType = (e) => setExpenseType(e.target.value)

   const handleSubmit = (e) => {
      e.preventDefault()

      // Check for income or expense
      const signedAmount = expenseType === 'expense' ? -amount : +amount

      const expenseData = {
         id: Math.random(),
         title: title,
         amount: signedAmount,
         date: new Date(date)
      }

      handleAddExpense(expenseData)

      setTitle('')
      setAmount('')
      setDate('')
   }

   return (
      <section>
         <div className="container">
            <form onSubmit={handleSubmit}>
               <div className="form-control">
                  <label >Title</label>
                  <input type="text" value={title} onChange={handleTitle} required />
               </div>
               <div className="form-control">
                  <label>Amount</label>
                  <input type="number" min="0" value={amount} onChange={handleAmount} required />
               </div>
               <div className="form-control">
                  <label>Date</label>
                  <input type="date" min="2020-01-01" value={date} onChange={handleDateChange} required />
               </div>
               <div className="form-control">
                  <label>Expense Type</label>
                  <select value={expenseType} onChange={handleExpenseType}>
                     <option value="income">Income</option>
                     <option value="expense">Expense</option>
                  </select>
               </div>
               <div className="expense-actions">
                  <button type="submit">Add Expense</button>
                  <button type="button">Cancel</button>
               </div>
            </form>
         </div>
      </section>
   )
}

export default ExpenseForm