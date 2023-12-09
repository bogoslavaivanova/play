import React, { useState, useContext } from "react";
import UserContext from "../../context/context";

// Custom hook for handling email and password state
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

const Services = () => {
  const emailInput = useFormInput("");
  const passwordInput = useFormInput("");
  const { accessToken, setAccessToken } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const responseData = await response.json();

      if (responseData.accessToken) {
        setAccessToken(responseData.accessToken);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogout = () => {
    setAccessToken(null);
  };

  return (
    <>
      <p>Services</p>
      {!accessToken ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" {...emailInput} />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" {...passwordInput} />
          </label>
          <button type="submit">Login</button>
        </form>
      ) : (
        <>
          <p>Hello! Your email: {emailInput.value}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
};

export default Services;
