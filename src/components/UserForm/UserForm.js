import { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const nameInputHandler = (event) => {
    console.log("usernanme input: ", event.target.value);
    setUsername(event.target.value);
  };

  const ageInputHandler = (event) => {
    console.log("age input: ", event.target.value);
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("SUBMIt HANDLER - username: ", username, "age: ", age);
    const formData = {
      id: Math.random().toString(),
      name: username,
      age: +age,
    };
    props.onFormSubmit(formData);
    setUsername("");
    setAge("");
  };

  return (
    <div className={`${styles["user-form"]}`}>
      <form>
        <div className={`${styles["user-form__controls"]}`}>
          <div className={`${styles["user-form__control"]}`}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
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
              value={age}
              required
              name="age"
              onChange={ageInputHandler}
            ></input>
          </div>
          <div className={`${styles["user-form__actions"]}`}>
            <button type="submit" onClick={submitHandler}>
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
