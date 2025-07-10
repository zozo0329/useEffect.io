import Header from "./Components/Header/Header";
import Form from "./Components/Main/Form/Form";
import AppStyle from "./App.module.css";
import LogoTitle from "./Components/Main/LogoTitle/LogoTitle";
import { useEffect, useState } from "react";

let usernameData = "";
let passwordData = "";
function App() {
  const [isRight, setIsRight] = useState(false);
  //
  const userDataHandler = (userData) => {
    usernameData = userData.username;
    passwordData = userData.password;
    const username = userData.username;
    const password = userData.password;
    if (username === "username123" && password === "password123") {
      setIsRight(true);
    }
  };
  useEffect(() => {
    if (usernameData === "username123" && passwordData === "password123") {
      console.log("WORKING");
      localStorage.setItem("SaveState", "true");
      setIsRight(true);
    }
    let key = localStorage.getItem("SaveState");
    if (key === "true") {
      setIsRight(true);
    }
  }, [isRight]);
  return (
    <>
      <Header isRight={isRight} setIsRight={setIsRight} />
      <div className={AppStyle.form}>
        {/* <LogoTitle /> */}
        {!isRight && <LogoTitle />}
        {!isRight && <Form userDataHandler={userDataHandler} />}
      </div>
    </>
  );
}

export default App;
