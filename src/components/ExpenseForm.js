import React, { useState, useContext } from 'react'

import ExpenseContext from '../context/ExpenseContext'

const ExpenseForm = () => {
   const [title, setTitle] = useState('')
   const [amount, setAmount] = useState('')
   const [date, setDate] = useState('')

   const { handleAddExpense, handleRemoveExpense } = useContext(ExpenseContext)

   const handleTitle = (e) => setTitle(e.target.value)
   const handleAmount = (e) => setAmount(e.target.value)
   const handleDateChange = (e) => setDate(e.target.value)

   const handleSubmit = (e) => {
      e.preventDefault()

      const expenseData = {
         id: Math.random(),
         title: title,
         amount: amount,
         date: new Date(date)
      }

      handleAddExpense(expenseData)
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className="form-control">
            <label htmlFor="title">Title</label>
            <input id="title" value={title} onChange={handleTitle} type="text" />
         </div>
         <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input id="amount" value={amount} onChange={handleAmount} type="number" />
         </div>
         <div className="form-control">
            <label htmlFor="date">Date</label>
            <input type="date" min='2020-01-01' value={date} onChange={handleDateChange} />
         </div>
         <div className="expense-actions">
            <button type="submit">Add Expense</button>
            <button type="button">Cancel</button>
         </div>
      </form>
   )
}

export default ExpenseForm