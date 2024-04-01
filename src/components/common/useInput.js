import { useState } from "react";

const useInput = (defaultValue, validationFn) => {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [edited, setEdited] = useState(false);
    const valueIsValid = validationFn(enteredValue);

    const handleInputChange = (event) => {
        setEnteredValue(event.target.value);
        setEdited(false);
    }

    const handleInputBlur = () => {
        setEdited(true);
    }

    return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: edited && !valueIsValid,
        setEdited
    }
}

export default useInput;