import React, { useState, useContext } from 'react'

import ExpenseContext from '../context/ExpenseContext'
import useInput from './../hooks/useInput'

const ExpenseForm = () => {
   const {
      inputValue: title,
      isValid: titleValidity,
      hasError: titleError,
      handleInputValue: handleTitleValue,
      handleInputBlur: handleTitleBlur,
      handleReset: titleReset
   } = useInput((value) => value.trim() !== '')

   const {
      inputValue: amount,
      isValid: amountValidity,
      hasError: amountError,
      handleInputValue: handleAmountValue,
      handleInputBlur: handleAmountBlur,
      handleReset: amountReset
   } = useInput((value) => value.trim() !== '')

   const {
      inputValue: date,
      isValid: dateValidity,
      hasError: dateError,
      handleInputValue: handleDateValue,
      handleInputBlur: handleDateBlur,
      handleReset: dateReset
   } = useInput((value) => value.trim() !== '')

   const [expenseType, setExpenseType] = useState('income')
   const { handleAddExpense: ctxAddExpense } = useContext(ExpenseContext)

   const handleExpenseType = (e) => {
      setExpenseType(e.target.value)
   }

   // Overall form validity (Disable button if invalid)
   const formValidity = titleValidity && amountValidity && dateValidity

   const handleSubmit = (e) => {
      e.preventDefault()

      if (!titleValidity || !amountValidity || !dateValidity) {
         return
      }

      // Check for income or expense
      const signedAmount = expenseType === 'expense' ? -amount : +amount

      const expenseData = {
         id: Math.random(),
         title: title,
         amount: signedAmount,
         date: new Date(date)
      }

      ctxAddExpense(expenseData)

      titleReset()
      amountReset()
      dateReset()
   }

   return (
      <section className="expense-form">
         <div className="container">
            <header>
               <h2>Add a new transaction</h2>
            </header>
            <form className="form" onSubmit={handleSubmit}>
               <div className="form-control">
                  <label >Title</label>
                  <input type="text" value={title} onChange={handleTitleValue} onBlur={handleTitleBlur} />
                  {titleError && <p>Title must not be empty!</p>}
               </div>
               <div className="form-control">
                  <label>Amount</label>
                  <input type="number" min="0" value={amount} onChange={handleAmountValue} onBlur={handleAmountBlur} />
                  {amountError && <p>Amount must not be empty!</p>}
               </div>
               <div className="form-control">
                  <label>Date</label>
                  <input type="date" min="2020-01-01" value={date} onChange={handleDateValue} onBlur={handleDateBlur} />
                  {dateError && <p>Date must not be empty!</p>}
               </div>
               <div className="form-control">
                  <label>Transaction Type</label>
                  <select value={expenseType} onChange={handleExpenseType}>
                     <option value="income">Income</option>
                     <option value="expense">Expense</option>
                  </select>
               </div>
               <div className="expense-form-actions">
                  <button type="submit" disabled={!formValidity}>Add Transaction</button>
                  <button type="button">Cancel</button>
               </div>
            </form>
         </div>
      </section>
   )
}

export default ExpenseForm