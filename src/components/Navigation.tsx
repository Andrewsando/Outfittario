import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <header className="site-header">
            <NavLink className="site-brand" to="/" end>
                Outfitario
            </NavLink>
            <nav className="site-nav" aria-label="Main navigation">
                <NavLink
                    className={({ isActive }) => `site-nav-link${isActive ? " is-active" : ""}`}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => `site-nav-link${isActive ? " is-active" : ""}`}
                    to="/closet"
                >
                    Closet
                </NavLink>
                <NavLink
                    className={({ isActive }) => `site-nav-link${isActive ? " is-active" : ""}`}
                    to="/preferences"
                >
                    Preferences
                </NavLink>
            </nav>
        </header>
    );
}

export default Navigation;