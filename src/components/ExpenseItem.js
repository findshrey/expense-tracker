import React, { useState } from 'react'

import Modal from './UI/Modal'

const ExpenseItem = ({ expense, handleRemoveExpense }) => {
   const [modalState, setModalState] = useState(false)
   const day = expense.date.toLocaleString('en-US', { day: '2-digit' })
   const month = expense.date.toLocaleString('en-US', { month: 'long' })
   const year = expense.date.getFullYear()

   const handleModal = () => {
      setModalState((prevState) => !prevState)
   }

   const sign = expense.amount > 0 ? '+' : '-'

   return (
      <>
         {
            modalState &&
            <Modal
               handleRemoveExpense={handleRemoveExpense.bind(null, expense.id)}
               handleModal={handleModal}
            />
         }
         <li className="expense-item" onClick={handleModal}>
            <div className="expense-info">
               <h4>{expense.title}</h4>
               <span>{`${day} - ${month} - ${year}`}</span>
            </div>
            <span>{`${sign} ₹${Math.abs(expense.amount).toFixed(2)}`}</span>
         </li>
      </>
   )
}

export default ExpenseItem