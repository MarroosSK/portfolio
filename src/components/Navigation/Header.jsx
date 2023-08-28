import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { FiSend } from "react-icons/fi";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import mIcon from "../../assets/Micon.png";
import "./Header.css";

const logoVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const Header = () => {
  const sideMenuRef = useRef(null);
  const headerRef = useRef(null);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const handleOffSet = (e) => {
    e.preventDefault();
    setToggleMobileMenu(false);
    const targetAttribute = e.target.getAttribute("href");
    const location = document.querySelector(targetAttribute).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  //close on click outside
  useEffect(() => {
    const handler = (e) => {
      if (!sideMenuRef.current.contains(e.target)) {
        setToggleMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header
      ref={headerRef}
      className=" w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* LOGO */}

          <div className="flex flex-row items-center justify-center ">
            <img src={mIcon} />
            <div className="leading-[20px]">
              <motion.h2
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="text-xl text-smallTextColor font-[700]"
              >
                arroos
              </motion.h2>
            </div>
          </div>

          {/* LINKS */}
          <div
            className={`menu ${toggleMobileMenu ? "show__menu" : ""}`}
            ref={sideMenuRef}
          >
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleOffSet}
                  className={
                    "text-smallTextColor hover:text-[#0D6EFD] font-[600]"
                  }
                  href="#home"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  onClick={handleOffSet}
                  className={
                    "text-smallTextColor hover:text-[#0D6EFD] font-[600]"
                  }
                  href="#about"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  onClick={handleOffSet}
                  className={
                    "text-smallTextColor hover:text-[#0D6EFD] font-[600]"
                  }
                  href="#projects"
                >
                  projects
                </a>
              </li>
            </ul>
          </div>
          {/* CALL TO ACTION */}
          <div className="flex items-center gap-4">
            <button onClick={handleOffSet} className="hidden md:block">
              <a
                href="#contact"
                className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor
                py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300"
              >
                Let&apos;s talk <FiSend />
              </a>
            </button>
            {/* MOBILE MENU */}

            <span
              onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              {toggleMobileMenu ? <AiOutlineClose /> : <RiMenuFill />}
            </span>
          </div>
        </div>
      </div>
      {toggleMobileMenu && (
        <div
          className="overlay"
          onClick={() => setToggleMobileMenu(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
