import HeaderStyle from "./Header.module.css";
import Button from "../UI/Button/Button";
import { useAuth } from "../auth-context/auth-context";
const Header = () => {
  const { logoutHandler, isRight } = useAuth();
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
