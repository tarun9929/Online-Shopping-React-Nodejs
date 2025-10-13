import React from 'react'

function useFormInputData(defaultValue = "") {
  const [inputData , setInputData] = React.useState(defaultValue);

  function handleInputChange(event) {
    setInputData(event.target.value);
  }

  return {
    inputData,
    handleInputChange
  };
}

export default useFormInputData
