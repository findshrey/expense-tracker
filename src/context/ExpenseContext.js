import React, { useState } from 'react'

const ExpenseContext = React.createContext()

const ExpenseProvider = ({ children }) => {
   const [expenses, setExpenses] = useState([{
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
   },
   {
      id: 'e2',
      title: 'Car Insurance',
      amount: 150.67,
      date: new Date(2021, 2, 28),
   },
   {
      id: 'e3',
      title: 'New Desk (Wooden)',
      amount: -75.68,
      date: new Date(2021, 5, 12),
   },])

   // Add new expense
   const handleAddExpense = (expense) => {
      setExpenses((prevExpenses) => {
         return [...prevExpenses, expense]
      })
   }

   // Remove an expense
   const handleRemoveExpense = (id) => {
      const updatedExpenses = expenses.filter((expense) => expense.id !== id)

      setExpenses(updatedExpenses)
   }

   return (
      <ExpenseContext.Provider value={{ expenses, handleAddExpense, handleRemoveExpense }}>
         {children}
      </ExpenseContext.Provider>
   )
}

export { ExpenseContext as default, ExpenseProvider }