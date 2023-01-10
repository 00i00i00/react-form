import styles from "./User.module.css";

const User = (props) => {
  return (
    <li className={`${styles.user} ${props.last && styles.last}`}>
      <div>{`${props.name} (${props.age} years old)`}</div>
    </li>
  );
};

export default User;
