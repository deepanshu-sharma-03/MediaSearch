import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-(--c2) items-center">
      <div className="  px-8 py-6">
        <NavLink to="/" className="text-2xl  font-semibold">
          Media Search
        </NavLink>
      </div>
      <div className="flex gap-4  px-7 py-5 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-700  px-5 py-3 font-extrabold text-white text-xl rounded active:scale-95"
              : "bg-(--c4) px-4 py-2 font-bold text-(--c1) text-xl rounded active:scale-95"
          }
        >
          Search
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-700  px-5 py-3 font-extrabold text-white text-xl rounded active:scale-95"
              : "bg-(--c4) px-4 py-2 font-bold text-(--c1) text-xl rounded active:scale-95"
          }
          to="/collection"
        >
          Collection
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
