import React from "react";
import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa";

const Header = ({title}) => (
  <header className="bg-slate-900 shadow-lg mb-12 sticky top-0">
    <nav className="navbar sm:flex sm:justify-between sm:flex-row sm:items-center flex flex-col container mx-auto px-4">
      <Link to="/">
        <FaGithubAlt className="text-5xl mr-3" />
        <span className="text-2xl font-bold">{title}</span>
      </Link>
      <div className="sm:pt-0 pt-2">
        <Link className="btn btn-ghost mr-4 rounded-full cursor-pointer" to="/">Home</Link>
        <Link className="btn btn-ghost mr-4 rounded-full cursor-pointer" to="/about">About</Link>
      </div>
    </nav>
  </header>
);
Header.defaultProps={
    title:"Github Profiles"
}
export default Header;
