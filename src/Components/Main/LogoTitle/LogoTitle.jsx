import React from "react";
import LogoTitleStyle from "./LogoTitle.module.css";
import Slime from "./slime-gif.gif";
const LogoTitle = () => {
  return (
    <div className={LogoTitleStyle.logo}>
      <div>
        <img src={Slime} alt="slime-logo" />
      </div>
    </div>
  );
};

export default LogoTitle;
