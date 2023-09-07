import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Create a UserList component
const UserList = () => {
  // Initialize the state to store the list of users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from local storage when the component mounts
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(userData);
  }, []);

  // Function to delete a user by user_id
  const deleteUser = (user_id) => {
    // Filter out the user to be deleted
    const updatedUsers = users.filter((user) => user.user_id !== user_id);
    // update the local storage and state
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    // show an alert that the user was deleted
    alert("User deleted successfully");
  };

  //
  return (
    <div className="user-list-container">
      <h2 className="user-list-title">User List</h2>
      <Link to="/create">
        <button className="create-user-button">Create User</button>
      </Link>

      {users.map((user) => (
        <div className="user-list-item" key={user.user_id}>
          <div className="user-data">
            <label>Name:</label>
            <span>{user.name}</span>
            <label>Email:</label>
            <span>{user.email}</span>
            <label>Phone:</label>
            <span>{user.phone}</span>
          </div>
          <div className="action-button">
            <Link to={`/update/${user.user_id}`}>
              <button>Update</button>
            </Link>
            <Link to={`/view/${user.user_id}`}>
              <button>View</button>
            </Link>
            <button onClick={() => deleteUser(user.user_id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
