import User from "../User/User";
import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <ul className={styles.users}>
      {props.users.map((user, index) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          last={index === props.users.length - 1}
        ></User>
      ))}
    </ul>
  );
};

export default Users;
