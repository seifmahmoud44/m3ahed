import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.css";
import "boxicons";
import { IoMenu } from "react-icons/io5";
import SlideMenu from "./SlideMenu";
import Button from "../Button";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <>
      <nav className={`nav ${stickyClass}`}>
        <Link to="/" className="site-title">
          <img src="logo.png" />
        </Link>

        <ul>
          <CustomLink to="/#about" normal={true}>
            <span>من نحن</span>
          </CustomLink>
          <CustomLink to="/about">
            <span>التوثيق</span>
          </CustomLink>
          <CustomLink to="/#Initiatives" normal={true}>
            <span>المبادرات</span>
          </CustomLink>
          <CustomLink to="/#sucess">
            <span>التأسيس و التطوير</span>
          </CustomLink>
          <CustomLink to="/news">
            <span>اخبارنا</span>
          </CustomLink>
        </ul>
        <Button />
        <SlideMenu showMenu={showMenu} setShowMenu={setShowMenu} />

        <div
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="max-md:flex hidden cursor-pointer  justify-center items-center"
        >
          <IoMenu className="text-3xl " />
        </div>
      </nav>
    </>
  );
}

function CustomLink({ to, children, normal, ...props }) {
  return (
    <>
      {normal ? (
        <a className="custom-nav" href={to} {...props}>
          <div className="main-div">
            <div>
              <span>{children}</span>
            </div>
            <div>
              <span>{children}</span>
            </div>
          </div>
        </a>
      ) : (
        <Link className="custom-nav" to={to} {...props}>
          <div className="main-div">
            <div>
              <span>{children}</span>
            </div>
            <div>
              <span>{children}</span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
