import React, {forwardRef} from "react";

const Input = forwardRef(({...props}, ref) => {
    return (
        <input className={`form-control form-control-sm m-1 input`} {...props} ref={ref}/>
    );
});

export default Input;