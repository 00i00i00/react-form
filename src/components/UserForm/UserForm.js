import Card from "../UI/Card";
import styles from "./UserForm.module.css";

const UserForm = () => {
  return (
    <Card className={styles.UserForm}>
      <form>
        <div className={`${styles["user-form__controls"]}`}>
          <div className={`${styles["user-form__controls"]}`}>
            <label for="username">Username</label>
            <input type="text" id="username" required name="username"></input>
          </div>
          <div className={`${styles["user-form__controls"]}`}>
            <label for="age">Age (Years)</label>
            <input type="text" id="age" required name="age"></input>
          </div>
          <div className={`${styles["user-form__controls"]}`}>
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
