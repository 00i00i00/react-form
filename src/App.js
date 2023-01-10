import { useState } from "react";

import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

const App = () => {
  const [usersArr, setUsersArr] = useState([]);

  const formSubmissionHandler = (newUser) => {
    console.log("newUser:", newUser);
    setUsersArr((prevArray) => {
      const updatedArray = [...prevArray];
      updatedArray.unshift(newUser);
      return updatedArray;
    });
  };

  return (
    <div>
      <UserForm onFormSubmit={formSubmissionHandler} />
      {usersArr.length > 0 && <Users users={usersArr} />}
    </div>
  );
};

export default App;
