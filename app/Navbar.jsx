"use client";
import { Bug, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname();
  console.log("currentPath", currentPath);

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav
      className={`relative border-b h-14 flex items-center px-4 md:px-8 lg:px-16 gap-4`}
    >
      {/* Logo */}
      <Link href="/">
        <Bug size={28} className="hover:text-blue-500" />
      </Link>

      <button
        className="ml-auto md:hidden "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Moblie menus */}
      <ul
        className={` ${
          menuOpen
            ? "  translate-x-0 absolute z-10 right-4 top-14"
            : "hidden translate-x-3 translate-y-3"
        } flex md:hidden flex-col shadow-2xl rounded-lg bg-white p-4  w-52 gap-4 transition-all duration-300 ease-in-out`}
      >
        {links.map((link) => (
          <li
            key={link.label}
            className={`${
              currentPath === link.href
                ? "text-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Menus*/}
      <ul className="hidden md:flex gap-5">
        {links.map((link) => (
          <li
            key={link.label}
            className={`text-gray-600 ${
              currentPath === link.href ? "text-blue-500" : "hover:text-black"
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
