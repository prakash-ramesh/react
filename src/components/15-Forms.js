import React from "react";
import useInput from "./common/useInput";
import Input from "./common/E-Input";
import Wrapper from "./common/D-Wrapper";
import txt from "../assets/15.txt";
import Button from "./common/B-Button";
import ChkRadio from "./common/F-ChkRadio";

const Form = () => {
  const {
    value: nameValue,
    handleInputBlur: handleNameBlur,
    handleInputChange: handleNameChange,
    hasError: nameHasError,
    setEdited: setNameEdited,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
    setEdited: setEmailEdited,
  } = useInput("", (value) =>
    value
      .trim()
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

  const {
    value: fruitValue,
    handleInputChange: handleFruitChange,
    handleInputBlur: handleFruitBlur,
    hasError: fruitHasError,
    setEdited: setFruitEdited,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: otherFruitValue,
    handleInputChange: handleOtherFruitChange,
    handleInputBlur: handleOtherFruitBlur,
    hasError: otherFruitHasError,
    setEdited: setOtherFruitEdited,
  } = useInput("", (value) => value.trim() !== "");

  const {
    handleInputChange: handleActivityChange,
    handleInputBlur: handleActivityBlur,
    hasError: activityHasError,
    setEdited: setActivityEdited,
    chkValues: selectedActivities
  } = useInput("", (value) => value.trim() !== "", true);

  const {
    value: otherActivityValue,
    handleInputChange: handleOtherActivityChange,
    handleInputBlur: handleOtherActivityBlur,
    hasError: otherActivityHasError,
    setEdited: setOtherActivityEdited,
  } = useInput("", (value) => value.trim() !== "");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameValue === "") setNameEdited(true);
    if (emailValue === "") setEmailEdited(true);
    if (fruitValue === "") setFruitEdited(true);
    if (fruitValue === 'Others' && otherFruitValue === "") setOtherFruitEdited(true);
    if (!selectedActivities.length) setActivityEdited(true);
    if (selectedActivities.includes('Others') && otherActivityValue === "") setOtherActivityEdited(true);

    if (nameHasError || emailHasError || fruitHasError || otherFruitHasError
        || activityHasError || otherActivityHasError) {
      return;
    }

    const formData = new FormData(event.target);
    const activities = formData.getAll('activity');
    const data = Object.fromEntries(formData.entries());
    data.activities = activities;
    data.activity = null;
    console.log(data);
  };

  const fruits = [
    { label: "Apple", value: "Apple" },
    { label: "Mango", value: "Mango" },
    { label: "Orange", value: "Orange" },
    { label: "Others", value: "Others" },
  ];

  const activities = [
    { label: "Biking", value: "Biking" },
    { label: "Fishing", value: "Fishing" },
    { label: "Hiking", value: "Hiking" },
    { label: "Skiing", value: "Skiing" },
    { label: "Swimming", value: "Swimming" },
    { label: "Others", value: "Others" },
  ];

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
        <ChkRadio
          label="Which fruit do you like?"
          id="fruit"
          type="radio"
          fields={fruits}
          onChange={handleFruitChange}
          onBlur={handleFruitBlur}
          error={fruitHasError && "Please select an option."}
        />
        {
          fruitValue === 'Others' && 
          <Input
          label="Favourite Fruit: "
          id="otherFruit"
          name="otherFruit"
          type="text"
          value={otherFruitValue}
          onChange={handleOtherFruitChange}
          onBlur={handleOtherFruitBlur}
          error={otherFruitHasError && "Please specify."}
          required
        />
        }
        <ChkRadio
          label="Favourite activities: "
          id="activity"
          type="checkbox"
          fields={activities}
          onChange={handleActivityChange}
          onBlur={handleActivityBlur}
          error={activityHasError && "Please choose."}
        />
        {
          selectedActivities.includes('Others') && 
          <Input
          label="Favourite Activity: "
          id="otherActivity"
          name="otherActivity"
          type="text"
          value={otherActivityValue}
          onChange={handleOtherActivityChange}
          onBlur={handleOtherActivityBlur}
          error={otherActivityHasError && "Please specify."}
          required
        />
        }
        <Button type="submit">Submit</Button>
      </form>
    </Wrapper>
  );
};

export default Form;
