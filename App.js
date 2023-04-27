import React,{useState} from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";


const App = () => {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return[...prevUsersList, {name: uName, age: uAge, college: uCollege,id: Math.random().toString()}];
    })
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </React.Fragment>
  )
}
export default App;