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
      <div className={`${styles["error-modal__modal"]}`}>
        <h1>Invalid Input</h1>
        <div className={`${styles["error-modal__modal-inner"]}`}>
          <p>{message}</p>
          <button onClick={closeModal}>Okay</button>
        </div>
      </div>
      <div
        className={`${styles["error-modal__overlay"]}`}
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default ErrorModal;
