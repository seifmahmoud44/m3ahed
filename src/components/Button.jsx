import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link
      to={"signin"}
      className="inline-block px-4 py-2 bg-[#1D8E5A] relative group h-fit transition-all overflow-hidden rounded-lg "
    >
      <div className=" absolute transition-all duration-1000 z-10  top-[-200%] left-1/2 group-hover:-top-1/2 -translate-x-1/2 w-[200%] h-[200%] overflow-hidden rounded-[50%] bg-[#252529] " />
      <div className="relative overflow-hidden  ">
        <span className="text-white transition-all duration-300  relative top-0 group-hover:-top-10">
          تسجيل الدخول
        </span>
        <span className="text-white transition-all duration-300 absolute top-full group-hover:top-0 left-0 z-20">
          تسجيل الدخول
        </span>
      </div>
    </Link>
  );
}
