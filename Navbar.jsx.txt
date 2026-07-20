import React from 'react';
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BiSolidDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-6 bg-zinc-950 text-white">

      {/* Logo */}
      <span
        className="text-transparent bg-clip-text font-bold text-xl "
        style={{
          backgroundImage:
            "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #f59e0b 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite"
        }}
      >
        Movie Find
      </span>

      {/* Menu */}
      <ul className="flex gap-8 text-3xl">

        <NavLink
          className={(e) => (e.isActive ? " text-white " : "")}
          to="/"
        >
          <li style={{
            backgroundImage:
              "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #f59e0b 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite"
          }}>
            <IoHome />
          </li>
        </NavLink>

        <NavLink
          className={(e) => (e.isActive ? "text-white" : "")}
          to="/about"
        >
          <li style={{
            backgroundImage:
              "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #f59e0b 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite"
          }}>
            <BiSolidDetail />
          </li>
        </NavLink>

      </ul>
    </nav>
  );
};

export default Navbar;