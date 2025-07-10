import React, { useState } from "react";
import FormStyle from "./Form.module.css";
import Card from "../../UI/Card/Card";
import CardStyle from "../../UI/Card/Card.module.css";
const Form = ({ userDataHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const usernameHandler = (e) => {
    setUsername(e.target.value);
    console.log("USERNAME: ", username);
    setIsValid(true);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log("PASSWORD: ", password);
    setIsValid(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = { username, password, id: Math.random().toString() };
    if (username !== "username123" && password !== "password123") {
      setIsValid(false);
    }
    if (
      userData.username.trim().length === 0 &&
      userData.password.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }
    userDataHandler(userData);

    // CLEANER
    setUsername("");
    setPassword("");
  };
  return (
    <Card className={CardStyle.card}>
      <form onSubmit={submitHandler}>
        <div
          className={` ${FormStyle.inputs} ${!isValid && FormStyle.invalid} `}
        >
          <input
            onChange={usernameHandler}
            value={username}
            type="text"
            placeholder="Usename"
          />
          <input
            onChange={passwordHandler}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className={FormStyle.button}>
          <button type="submit">Login</button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
