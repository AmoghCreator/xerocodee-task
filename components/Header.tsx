"use client"
import logo from "@/public/logo.png"
import Image from "next/image";
import { Drawer } from "@mui/material";
import React from "react";
import Hamburg from "@/public/menu.png"

const Header = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  }
  return (
    <div className="md:w-screen flex items-center justify-between bg-white px-8" >
      <Image src={logo} alt="Nal" width={50} height={50} />
      <div className="hidden md:block md:flex md:justify-between gap-40">
        <ul className="list-none flex gap-10 bg-gray-200 px-10 py-2 rounded-3xl" style={{ backgroundColor: "#F7F7FD" }}>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
        <button className="px-10 py-2 bg-blue-500 rounded-3xl text-white">
          <h3>Schedule a call</h3>
        </button>
      </div>

      <div className="md:hidden">
        <Image src={Hamburg} alt="" height={30} width={30} />
      </div>
    </div>
  )
}

export default Header;
