"use client"; //We use client mood because of currentPath. It is browser based.
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineHeatMap } from "react-icons/ai";
const NavBar = () => {
  const currentPath = usePathname();
  //   console.log(currentPath);
  const links = [
    { label: "Dashboard", link: "/" },
    { label: "Issues", link: "/issues" },
  ];
  return (
    <nav className="flex gap-x-6 border-b h-14 items-center px-6 mb-5">
      <Link href="/">
        <AiOutlineHeatMap className="text-2xl" />
      </Link>
      <ul className="flex gap-x-6">
        {links?.map((singleLInk) => (
          <li
            key={singleLInk.link}
            // className={`${
            //   currentPath === singleLInk.link
            //     ? `text-zinc-800`
            //     : "text-zinc-500"
            // }  hover:text-zinc-800 transition-colors`}
            className={classNames({
              "text-zinc-800": currentPath === singleLInk.link,
              "text-zinc-500": currentPath !== singleLInk.link,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            <Link href={singleLInk.link}>{singleLInk.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
