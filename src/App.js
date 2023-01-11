import { useState } from "react";

import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const App = () => {
  const [usersArr, setUsersArr] = useState([]);
  const [formInvalid, setFormInvalid] = useState(false);
  const [formErrorType, setFormErrorType] = useState("");

  const formSubmissionHandler = (newUser) => {
    setUsersArr((prevArray) => {
      const updatedArray = [...prevArray];
      updatedArray.unshift(newUser);
      return updatedArray;
    });
  };

  const invalidFormHandler = (errorType) => {
    setFormInvalid(true);
    setFormErrorType(errorType);
  };

  const modalCloseHandler = () => {
    setFormInvalid(false);
  };

  return (
    <div>
      <UserForm
        onFormSubmit={formSubmissionHandler}
        onFormInvalid={invalidFormHandler}
      />
      {usersArr.length > 0 && <Users users={usersArr} />}
      {formInvalid && (
        <ErrorModal errorType={formErrorType} onClose={modalCloseHandler} />
      )}
    </div>
  );
};

export default App;
