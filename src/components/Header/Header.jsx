import { NavLink } from "react-router-dom";
import "./Header.scss";

const headerList = ["Posts", "Comments", "Albums", "Photos", "Todos", "Users"];

const Header = () => {
  return (
    <header>
      <ul>
        {headerList.map((el) => (
          <li key={el}>
            <NavLink to={`/${el}`}>{el}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
