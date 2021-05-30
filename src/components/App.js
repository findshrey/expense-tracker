import React from 'react'
import AddExpenseForm from './AddExpenseForm'
import ExpenseList from './ExpenseList'

import Header from './Header'
import Summary from './Summary'

const App = () => {
   return (
      <>
         <Header />
         <Summary />
         <ExpenseList />
         <AddExpenseForm />
      </>
   )
}

export default App