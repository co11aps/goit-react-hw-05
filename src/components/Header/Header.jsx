import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
