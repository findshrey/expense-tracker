import React, { useContext } from 'react'

import ExpenseContext from './../context/ExpenseContext'

const Summary = () => {
   const { expenses } = useContext(ExpenseContext)

   console.log(expenses);
   return (
      <section>
         <p>Summary</p>
      </section>
   )
}

export default Summary