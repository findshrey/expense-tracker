import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ ctxRemoveExpense, handleModal }) => {
   return ReactDOM.createPortal(
      <>
         <div className="modal-backdrop" />
         <div className="modal">
            <header>
               <h2>Remove transaction?</h2>
            </header>
            <div className="modal-content">
               <p>Are you sure you want to remove this transaction?</p>
            </div>
            <footer>
               <button onClick={ctxRemoveExpense}>Yes</button>
               <button onClick={handleModal}>No</button>
            </footer>
         </div>
      </>,
      document.getElementById('modal-root')
   )
}

export default Modal