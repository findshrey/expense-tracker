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
         <main>
            <Summary />
            <ExpenseForm />
            <ExpenseList />
         </main>
      </ExpenseProvider>
   )
}

export default App