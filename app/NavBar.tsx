import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex gap-x-6 border-b h-14 items-center px-6 mb-5">
      <Link href="/">Logo</Link>
      <ul className="flex gap-x-6">
        <li>Dashboard</li>
        <li>Issues</li>
      </ul>
    </nav>
  );
};

export default NavBar;
