import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';

import "../styles/navbar.scss";

function Navbar() {
    // const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__content">
                <Link to="mainEl" className="header__content__logo">
                    FARAI
                </Link>
                <nav
                    className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
                >
                    <ul>
                        <li className="nav-item">
                            <Link className="link" to="mainEl" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link" to="about" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu} >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link" to="skills" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu} >Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link" to="projects" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu} >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link" to="contact" spy={true} smooth={true} offset={-10} duration={500} onClick={closeMenu} >Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__content__toggle">
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;