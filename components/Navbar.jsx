"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles";
import { navLinks } from "../constants";
import { AppIcon, menu, close } from "../assets";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-b border-gray-500`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/AppIcon.png"
            alt="search"
            className="w-[54px] h-[54px] object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex flex-row">
            BhutanNews &nbsp;
            <span className="sm:block md:hidden hidden text-gray-400">
              | App
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <button className="bg-blue-100 px-3 rounded-full text-primary hover:opacity-50">
            Agency Subscription
          </button>
        </ul>
        <div className="sm:hidden md:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <IoClose onClick={() => setToggle(!toggle)} size={25} />
          ) : (
            <IoMenu onClick={() => setToggle(!toggle)} size={25} />
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 absolute top-14 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
