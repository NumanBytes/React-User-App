import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { user_id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  // Define the user state
  const [user, setUser] = useState({});

  useEffect(() => {
    // Retrieve user data from local storage based on user_id
    const userData = JSON.parse(localStorage.getItem("users")).find(
      (u) => u.user_id === user_id
    );

    if (userData) {
      // Set state variables from userData
      setName(userData.name || "");
      setEmail(userData.email || "");
      setPhone(userData.phone || "");
      // Set the user state with userData
      setUser(userData);
    }
  }, [user_id]);

  const handleUpdateUser = () => {
    if (!name || !email || !phone) {
      setIsEmpty(true);
      alert("Please update all fields");
    } else {
      setIsEmpty(false);
      // Create an updated user object
      const updatedUser = { ...user, name, email, phone };
      // Retrieve existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      // Update the user in the existing user list
      const updatedUsers = existingUsers.map((u) =>
        u.user_id === user_id ? updatedUser : u
      );
      // Update the local storage with the updated user list
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Set the flag to indicate a successful update
      setIsUpdateSuccessful(true);

      setTimeout(() => {
        navigate("/user-list");
      }, 1000); // Delay for 1 second
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      {isEmpty && <p>Please update all fields</p>}
      {isUpdateSuccessful && (
        <div className="success-alert">User updated successfully!</div>
      )}
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default UpdateUser;
