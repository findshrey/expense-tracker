import { useState } from 'react'

const useInput = (validateValue) => {
   const [inputValue, setInputValue] = useState('')
   const [touched, setTouched] = useState(false)

   // Validity check
   const isValid = validateValue(inputValue)
   const hasError = touched && !isValid

   const handleInputValue = (e) => {
      setInputValue(e.target.value)
   }

   const handleInputBlur = () => {
      setTouched(true)
   }

   const handleReset = () => {
      setInputValue('')
      setTouched(false)
   }

   return {
      inputValue,
      isValid,
      hasError,
      handleInputValue,
      handleInputBlur,
      handleReset
   }
}

export default useInput