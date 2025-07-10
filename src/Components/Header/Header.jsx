import React from "react";
import HeaderStyle from "./Header.module.css";
import Button from "../UI/Button/Button";
const Header = ({ isRight, setIsRight }) => {
  const logoutHandler = () => {
    setIsRight(false);
    localStorage.removeItem("SaveState");
  };
  return (
    <div className={HeaderStyle.header}>
      <div>
        <h1>Logo</h1>
      </div>

      {isRight && (
        <div className={HeaderStyle.list}>
          <ul>
            <li>Profile</li>
            <li>Admin</li>
            <li>Unknown</li>
            <li>Unknown</li>
          </ul>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
