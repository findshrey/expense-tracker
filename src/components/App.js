import React from 'react'

import { ExpenseProvider } from './../context/ExpenseContext'
import Header from './Header'
import Summary from './Summary'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const App = () => {
   return (
      <ExpenseProvider>
         <Header />
         <Summary />
         <ExpenseForm />
         <ExpenseList />
      </ExpenseProvider>
   )
}

export default App