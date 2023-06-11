import { useScroll } from '../../hooks/useScroll';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import { useContext, useEffect } from 'react';
import { NavbarContext } from '../../context/navbarContext';
import Logo from '../Logo/Logo';
import {motion} from "framer-motion"


const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const Navigation = () => {
    const {scrolled} = useScroll();
    const {activeLink, setActiveLink} = useContext(NavbarContext)

    //scrollToTop
    useEffect(()=>{
      window.scrollTo(0,0)
    }, [activeLink])

    return (
      <Navbar expand="md" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="/"  className='display-1'>
            <Logo/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex flex-column flex-md-row  justify-content-center align-items-md-center mt-2 gap-4">
                    <Link to="/" className={`${activeLink === "home" ? "active_link" : "text-dark" } text-decoration-none custom_link `}onClick={() => setActiveLink("home")}>Home</Link>
                    <Link to="/about" className={`${activeLink === "about" ? "active_link" : "text-dark" } text-decoration-none custom_link `} onClick={() => setActiveLink("about")}>About</Link>
                    <Link to="/projects" className={`${activeLink === "projects" ? "active_link" : "text-dark" } text-decoration-none custom_link `} onClick={() => setActiveLink("projects")}>Projects</Link>
                    <motion.button 
                    variants={buttonVariants}
                    whileHover="hover" 
                    className='btn btn-dark btn_size' onClick={() => setActiveLink("contact")}>
                    <Link
                        to="/contact"
                        className='text-dark'
                        style={{textDecoration: "none"}}
                    >
                        Contact me
                    </Link>
                    </motion.button>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navigation