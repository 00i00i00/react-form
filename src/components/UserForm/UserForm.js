import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = () => {
  return (
    <div className={`${styles["user-form"]}`}>
      <form>
        <div className={`${styles["user-form__controls"]}`}>
          <div className={`${styles["user-form__control"]}`}>
            <label for="username">Username</label>
            <input type="text" id="username" required name="username"></input>
          </div>
          <div className={`${styles["user-form__control"]}`}>
            <label for="age">Age (Years)</label>
            <input type="text" id="age" required name="age"></input>
          </div>
          <div className={`${styles["user-form__actions"]}`}>
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
