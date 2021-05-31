import React from 'react'

import Header from './Header'
import Overview from './Overview'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import { ExpenseProvider } from './../context/ExpenseContext'

const App = () => {
   return (
      <ExpenseProvider>
         <Header />
         <main>
            <Overview />
            <ExpenseForm />
            <ExpenseList />
         </main>
      </ExpenseProvider>
   )
}

export default App