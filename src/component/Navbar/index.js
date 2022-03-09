// React Router
import { NavLink } from "react-router-dom";
// Components
import { SearchBar } from "..";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar-nav">
          <h1 className="nav-brand">
            <NavLink to="/">
              <i className="fas fa-video"></i> Movie App
            </NavLink>
          </h1>
          <SearchBar />
          <ul className="nav-links">
            <li className="links-link">
              <NavLink
                to={{
                  pathname: "/nowplaying/page/1",
                  state: { pageTitle: "Les Fims au cinéma" },
                }}
              >
                Au cinema
              </NavLink>
            </li>
            <li className="links-link">
              <NavLink
                to={{
                  pathname: "/popular/page/1",
                  state: { pageTitle: "Les films populaires" },
                }}
              >
                Films populaires
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
