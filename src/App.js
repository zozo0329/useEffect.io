import Header from "./Components/Header/Header";
import Form from "./Components/Main/Form/Form";
import AppStyle from "./App.module.css";
import LogoTitle from "./Components/Main/LogoTitle/LogoTitle";
import { useAuth } from "./Components/auth-context/auth-context";

function App() {
  const { isRight, userDataHandler } = useAuth();
  return (
    <>
      <Header />
      <div className={AppStyle.form}>
        {/* <LogoTitle /> */}
        {!isRight && <LogoTitle />}
        {!isRight && <Form userDataHandler={userDataHandler} />}
      </div>
    </>
  );
}

export default App;
