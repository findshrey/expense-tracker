import React, { useState } from 'react'

const ExpenseContext = React.createContext()

const ExpenseProvider = ({ children }) => {
   const [expenses, setExpenses] = useState([{
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
   },
   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
   {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
   },
   {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
   },])

   // Add new expense
   const handleAddExpense = (expense) => {
      setExpenses(prevExpenses => {
         return [...prevExpenses, expense]
      })
   }

   // Remove an expense
   const handleRemoveExpense = (id) => {

   }

   return (
      <ExpenseContext.Provider value={{ expenses, handleAddExpense, handleRemoveExpense }}>
         {children}
      </ExpenseContext.Provider>
   )
}

export { ExpenseContext as default, ExpenseProvider }