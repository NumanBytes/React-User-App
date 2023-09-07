import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// Function to create a user
const CreateUser = () => {
  // make useStates for storing the variables
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isCreateSuccessful, setIsCreateSuccessful] = useState(false);

  // Make a handleCreateUser Function also
  const handleCreateUser = () => {
    // First of all, generate a random user_id using uuid
    const user_id = uuidv4();
    // Create a new user object
    const newUser = { user_id, name, email, phone };

    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Add the new user to the existing Users
    const updatedUsers = [...existingUsers, newUser];
    // Update the local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    // set the flag to indicate successful create
    setIsCreateSuccessful(true);

    // Navigate back to user list
    setTimeout(() => {
      navigate('/user-list');

    }, 1000);

  };
  return (
    <div>
      <h2>Create User</h2>
      {isCreateSuccessful && (
        <div className="success-aler">
          User created successfuly!
        </div>
      )}
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:{" "}
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default CreateUser;
