import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

const App = () => {
  const users = [
    { id: Math.random().toString(), name: "A", age: "2" },
    { id: Math.random().toString(), name: "B", age: "42" },
    { id: Math.random().toString(), name: "C", age: "96" },
  ];

  return (
    <div>
      <UserForm />
      <Users users={users} />
    </div>
  );
};

export default App;
