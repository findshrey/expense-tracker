import React from 'react'

const Modal = ({ handleRemoveExpense, handleModal }) => {
   return (
      <div className="modal">
         <header>
            <h2>Remove transaction?</h2>
         </header>
         <div className="modal-content">
            <p>Are you sure you want to remove this transaction?</p>
         </div>
         <footer>
            <button onClick={handleRemoveExpense}>Yes</button>
            <button onClick={handleModal}>No</button>
         </footer>
      </div>
   )
}

export default Modal