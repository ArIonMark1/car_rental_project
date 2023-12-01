import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <ul className={css.nav_list}>
          <li className={css.list_element}>
            <NavLink className={css.element_text} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className={css.list_element}>
            <NavLink className={css.element_text} to={"/catalog"}>
              Catalog
            </NavLink>
          </li>
          <li className={css.list_element}>
            <NavLink className={css.element_text} to={"/favorites"}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
