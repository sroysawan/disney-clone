import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
    const [toggle,setToggle] = useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[80px] lg:w-[110px] object-cover" />
        <div className="hidden lg:flex gap-8 ">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex lg:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && 
              <HeaderItem name={''} Icon={item.icon} />
          )}
        </div>
        <div className="lg:hidden" onClick={()=> setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-2 md:px-5 py-4 right-24 sm:right-auto">
          {menu.map((item,index) => index > 2 && (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
          </div>: null}
        </div>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
