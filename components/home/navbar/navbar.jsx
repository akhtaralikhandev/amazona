"use client";
import { useState } from "react";
import Link from "next/link";
import "./navbar.css";
const Navbar = () => {
  // used for search all div
  const [display, setDisplay] = useState("none");
  const [displayLogin, setDisplayLogin] = useState("none");
  const [selectedOption, setSelectedOption] = useState("all");
  const [displaySidebar, setDisplaySidebar] = useState("none");
  const [sidebarOverlay, setSidebarOverlay] = useState(false); // Added state for sidebar overlay

  const toggleDisplay = () => {
    if (display === "none") {
      setDisplay("flex");
    } else if (display === "flex") {
      setDisplay("none");
    }
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDisplay("none");
  };
  const toggleSidebar = () => {
    if (displaySidebar === "none") {
      setDisplaySidebar("block");
      setSidebarOverlay(true);
    } else {
      setDisplaySidebar("none");
      setSidebarOverlay(false);
    }
  };
  const options = ["option 1", "option 2", "option 3", "option 4"];
  return (
    <div>
      <div className="navbar_wrapper z-50 absolute w-full pl-4 p-2 pr-5 flex xl:flex-row lg:flex-row md:flex-row-reverse items-center   bg-gray-800 text-white xl:justify-between lg:justify-between  ">
        <div className="navbarLogo flex ml-8    cursor-pointer hover:text-gray-200 items-center ">
          <span className="text-2xl cursor-pointer">Manal</span>
          <span>
            <i
              className="fa fa-arrow-circle-down text-yellow-500"
              aria-hidden="true"
            ></i>
          </span>
        </div>
        <div className="rightsideicon hidden lg:flex  xl:flex items-center justify-between">
          <div className="deliverto cursor-pointer  hover:text-gray-200">
            <span>
              <i className="fa fa-location-arrow" aria-hidden="true"></i>
            </span>
            <span>Deliver to Pakistan</span>
          </div>
          <div className="navbarsearch    relative bg-white items-center hidden lg:flex xl:flex">
            <div className="dropdown text-xl text-black bg-gray-700">
              <span
                onClick={() => toggleDisplay()}
                className="bg-gray-200  cursor-pointer hover:bg-blue-300 p-2 border-none outline-none"
              >
                {selectedOption}{" "}
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </span>
              <ul
                style={{ display: display }}
                onMouseLeave={() => setDisplay("none")}
                className="absolute xl:flex lg:flex md:flex hidden navbardropdownlist w-52 bg-gray-200 p-2 rounded-lg flex-col top-12 items-center"
              >
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className="hover:bg-blue-600 p-2 cursor-pointer rounded-lg hover:text-white"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            <input
              type="text"
              className="text-xl p-1 xl:w-96 lg:w-full  text-black lg:p-2 md:p-2  xl:p-2  outline-none border-none"
            />
            <span className="text-black bg-yellow-600 p-2 border-none outline-none pr-2 text-xl absolute  right-0">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <div className="hallosignin">
            <span
              onMouseEnter={() => setDisplayLogin("flex")}
              onClick={() => setDisplayLogin("flex")}
              className="hover:text-gray-200 cursor-pointer"
            >
              Hello Sign In
            </span>
            <div
              onMouseLeave={() => setDisplayLogin("none")}
              style={{ display: displayLogin }}
              className="div havingaccount absolute rounded-lg  bg-gray-200 text-black p-2 w-48 flex flex-col items-center  gap-2"
            >
              <span>having account?</span>
              <Link href={"/login"}>
                <span className="bg-white text-black hover:text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                  login here
                </span>
              </Link>
              <span>Or</span>
              <Link href={"/register"}>
                <span className="bg-white text-black hover:text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                  Sign up here
                </span>
              </Link>
            </div>
          </div>
          <div className="returnsOrders cursor-pointer hover:text-gray-200">
            <span>
              Returns & <span>Orders</span>
            </span>
          </div>
          <div className="cart flex items-center relative cursor-pointer hover:text-gray-200">
            <span className="absolute -top-3 left-2">0</span>
            <span className="text-3xl">
              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </span>
            <span>Cart</span>
          </div>
        </div>
        {sidebarOverlay && (
          <div
            className="sidebar-overlay fixed inset-0  bg-black opacity-50"
            onClick={() => toggleSidebar()}
          ></div>
        )}
        <div
          onClick={() => toggleSidebar()}
          className="menuicon text-xl absolute left-4 top-4 cursor-pointer hover:text-gray-200 "
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div
          style={{ display: displaySidebar }}
          className="sidebarcomponent bg-white absolute  h-screen text-gray-700 w-96 border-r border-blue-700 left-0 top-12"
        >
          <div className="sidebarcomponentwrapper z-10 mt-8">
            <ul className="text-xl items-start overscroll-y-auto  pl-8 flex flex-col gap-2">
              <li className="p-2 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-white">
                Gents Clothes
              </li>
              <li className="p-2 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-white">
                Womens Clothing
              </li>
              <li className="p-2 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-white">
                Kids Clothing
              </li>
              <li className="p-2 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-white">
                Shoes
              </li>
              <li className="p-2 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-white">
                Bags and Accessories
              </li>
              <li className="p-2 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-white">
                Electronics
              </li>
              <li
                onClick={() => toggleSidebar()}
                className="absolute cursor-pointer right-12 top-2 text-4xl text-red-500"
              >
                <i className="fa fa-close" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="inputdiv hidden  bg-white text-black">
          <input type="text" className="p-1 border-none outline-none" />
          <span className="bg-yellow-600  p-1 text-white">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <Link href={"/login"}>
          <div className="inputdiv xl:hidden lg:hidden  h-8 w-8 flex items-center justify-center p-1 text-xl rounded-full bg-white text-black">
            <i className="fa fa-user" aria-hidden="true"></i>{" "}
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
