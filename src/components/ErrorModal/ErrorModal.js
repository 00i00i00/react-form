import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const closeModal = () => {
    props.onClose();
  };

  let message;
  if (props.errorType === "empty")
    message = "Please enter a valid name and age (non-empty fields).";
  else if (props.errorType === "negativeAge")
    message = "Please enter a valid age (> 0).";

  return (
    <div className={`${styles["error-modal"]}`}>
      <Card className={`${styles["error-modal__modal"]}`}>
        <header>
          <h2>Invalid Input</h2>
        </header>
        <div className={`${styles["error-modal__modal-inner"]}`}>
          <p>{message}</p>
          <Button onClick={closeModal}>Okay</Button>
        </div>
      </Card>
      <div
        className={`${styles["error-modal__overlay"]}`}
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default ErrorModal;
