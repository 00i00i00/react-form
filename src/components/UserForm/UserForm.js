import { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameInputHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const inputValidation = () => {
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.toString().trim().length === 0
    ) {
      props.onFormInvalid("empty");
      return false;
    } else if (+enteredAge < 1) {
      props.onFormInvalid("negativeAge");
      return false;
    } else {
      return true;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputIsValid = inputValidation();

    if (inputIsValid) {
      const formData = {
        id: Math.random().toString(),
        name: enteredUsername,
        age: +enteredAge,
      };

      props.onFormSubmit(formData);
    }
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card className={`${styles["user-form"]}`}>
      <form>
        <div>
          <div className={`${styles["user-form__control"]}`}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={enteredUsername}
              required
              name="username"
              onChange={nameInputHandler}
            ></input>
          </div>
          <div className={`${styles["user-form__control"]}`}>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              value={enteredAge}
              required
              name="age"
              onChange={ageInputHandler}
            ></input>
          </div>
          <Button type="submit" onClick={submitHandler}>
            Add User
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
