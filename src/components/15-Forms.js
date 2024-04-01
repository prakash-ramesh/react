import React from "react";
import useInput from "./common/useInput";
import Input from "./common/E-Input";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/15.txt";
import Button from "./common/B-Button";

const Form = () => {
  const {
    value: nameValue,
    handleInputBlur: handleNameBlur,
    handleInputChange: handleNameChange,
    hasError: nameHasError,
    setEdited: setNameEdited
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
    setEdited: setEmailEdited
  } = useInput("", (value) =>
    value
      .trim()
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameValue === '')
        setNameEdited(true);
    if (emailValue === '')
        setEmailEdited(true);

    if (nameHasError || emailHasError) {
      return;
    }

    const formData = new FormData(event.target);
    const days = formData.getAll("days");
    const data = Object.fromEntries(formData.entries());
    data.days = days;
    console.log(data);
  };

  return (
    <Wrapper title="Forms" fileName={txt}>
      <h6>C15: Forms</h6>
      <form noValidate onSubmit={handleSubmit}>
        <Input
          label="Name: "
          id="name"
          name="name"
          type="text"
          value={nameValue}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          error={nameHasError && "Invalid Name"}
        />
        <Input
          label="Email: "
          id="email"
          name="email"
          type="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && "Invalid Email"}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
};

export default Form;
