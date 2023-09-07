import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  // First Create Users using useState
  const { user_id } = useParams();
  const [user, setUser] = useState({});
  //Now implement useEffect
  useEffect(() => {
    // retrieve data from local storage based on userId
    const userData = JSON.parse(localStorage.getItem("users")).find(
      (u) => u.user_id === user_id
    );
    console.log('userData:', userData);
    // save user to local storage again
    setUser(userData || {});
  }, [user_id]);
  return (
    <div>
      <h2>View User</h2>
      {user && (
        <div>
          <label>Name:</label> {user.name || ""}
          <br />
          <label>Email:</label> {user.email || ""}
          <br />
          <label>Phone:</label> {user.phone || ""}
          <br />
        </div>
      )}
    </div>
  );
};

export default ViewUser;
