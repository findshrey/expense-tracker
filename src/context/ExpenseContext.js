import React, { useState } from 'react'

const ExpenseContext = React.createContext()

const ExpenseProvider = ({ children }) => {
   const [expenses, setExpenses] = useState([])

   // Add new expense
   const handleAddExpense = (item) => {

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