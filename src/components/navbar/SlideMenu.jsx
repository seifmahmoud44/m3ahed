import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SlideMenu({ showMenu, setShowMenu }) {
  return (
    <div
      className={` transition-all duration-700 fixed  top-0 w-screen h-screen bg-[#00000050] ${
        showMenu ? "left-0" : "left-full"
      }`}
    >
      <div className="w-64 relative h-screen ml-auto bg-white shadow-lg p-4">
        <AiOutlineCloseCircle
          onClick={() => setShowMenu(false)}
          className="absolute cursor-pointer top-7 right-7 text-2xl"
        />

        {/* Logo */}
        <img src="logo.png" alt="Logo" className="w-10 h-10 mr-2" />

        {/* Menu Items */}
        <div className="menu mt-10 divide-y ">
          <Link
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            to="/"
            className="block  py-3  text-black font-medium hover:text-green-500"
          >
            الرئيسية
          </Link>
          <a
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            href="#about"
            className="block  py-3  text-black font-medium hover:text-green-500"
          >
            من نحن
          </a>
          <Link
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            to="about"
            className="block  py-3  text-black font-medium hover:text-green-500"
          >
            التوثيق
          </Link>
          <a
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            href="/#Initiatives"
            className="block  py-3  text-black font-medium hover:text-green-500"
          >
            المبادرات
          </a>
          <a
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            href="/#sucess"
            className="block  py-3  text-black font-medium hover:text-green-500"
          >
            التأسيس والتطوير
          </a>
          <Link
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            to="news"
            className="block  py-3  text-black font-medium hover:text-green-500"
          >
            اخبارنا
          </Link>
        </div>
      </div>
    </div>
  );
}
