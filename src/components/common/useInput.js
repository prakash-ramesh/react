import { useState } from "react";

const useInput = (defaultValue, validationFn, selectMany = false) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [edited, setEdited] = useState(false);
  const valueIsValid = validationFn(enteredValue);
  const [chkValues, setChkValues] = useState(selectMany ? [] : null);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setEdited(false);
    if (selectMany) {
      setChkValues((prevState) => {
        if (prevState.indexOf(event.target.value) === -1) {
          return [event.target.value, ...prevState];
        } else {
          return prevState.filter(x => x !== event.target.value);
        }
      });
    }
  };

  const handleInputBlur = () => {
    setEdited(true);
  };

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: edited && !valueIsValid,
    setEdited,
    chkValues
  };
};

export default useInput;
