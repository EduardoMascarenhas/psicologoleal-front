import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
    console.log(dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/">
          <a>Início</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Terapia Online
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="cta-one"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Sobre Mim
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="cta-two"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Certificados
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Depoimentos
        </ScrollLink>
      </li>
      <li className="dropdown">
        <ScrollLink
            activeClass="current"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Blog
          </ScrollLink>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link href="/blog">
              <a>Todos os Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-post">
              <a>Detalhes do Post</a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
