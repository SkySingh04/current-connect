import {  useState } from "react";
import { useNavigate } from "react-router-dom";


export const Customerdetails = () => {

    const [unit, setUnit] = useState('');


    const sendDataToBackend = () => {
        fetch('http://localhost:3000/api/perform-operation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ value: parseInt(unit) }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the backend if needed
            console.log(data);
          })
          .catch((error) => {
            // Handle errors
            console.error('Error:', error);
          });
      };





    const navigate= useNavigate()

    const unitChange = (event) => {
        setUnit(event.target.value);
      };

      const FPay = () => {
        sendDataToBackend();
        navigate(`/payment?unit=${unit}`); // Pass the unit as a URL parameter
      }

 
  return (
    <div className="App1">
        <form  onSubmit={FPay}>
      <div>
        <label >Name</label>
        <input
          type="text"
          placeholder="Enter you Name..."

        />
      </div>
      <div>
        <label >Customer ID</label>
        <input
          type="text"
          placeholder="Customer ID..."

        />
      </div>
      <div>
        <label htmlFor="unit">Units Consumed</label>
        <input
          type="text"
          placeholder="enter total units"
          value={unit}
          onChange={unitChange}c
        />
      </div>
      <button className="button1" type="submit">submit</button>
    </form>

    </div>
    
  );
};



/*
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add your login logic
    // For this example, let's just simulate a successful login
    onLogin(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;*/