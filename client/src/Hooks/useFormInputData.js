import React from 'react'

function useFormInputData(defaultValue = "") {
  const [inputData , setInputData] = React.useState(defaultValue);

  function handleInputChange(event, target) {
    if(event) {
      setInputData(event.target.value);
    }
    else {
      setInputData(target);
    }
  }

  return {
    inputData,
    handleInputChange
  };
}

export default useFormInputData
