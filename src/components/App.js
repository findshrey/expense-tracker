import React from 'react'

import { ExpenseProvider } from './../context/ExpenseContext'
import Header from './Header'
import Summary from './Summary'
import AddExpenseForm from './AddExpenseForm'
import ExpenseList from './ExpenseList'

const App = () => {
   return (
      <ExpenseProvider>
         <Header />
         <Summary />
         <AddExpenseForm />
         <ExpenseList />
      </ExpenseProvider>
   )
}

export default App