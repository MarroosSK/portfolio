import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const NavbarContext = createContext();

export const NavbarContextProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState("home");

    return (
        <NavbarContext.Provider value={{ activeLink, setActiveLink }}>
            {children}
        </NavbarContext.Provider>
    );
}

NavbarContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};