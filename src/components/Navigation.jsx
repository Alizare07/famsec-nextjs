"use client";
import Image from "next/image";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

const navigationMenu = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "How it work",
  },
  {
    href: "#",
    label: "Our Mission",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: innerHeight,
        width: innerWidth,
      });
      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            {/*logo*/}
            <div>
              <Link href={"/"}>
                <Image
                  src={"/logo-social (2).png"}
                  alt="image-logo"
                  width={157}
                  height={10}
                />
              </Link>
            </div>
            {/* navigation Menu*/}
            <div className="hidden md:block">
              <ul className="flex space-x-7 ">
                {navigationMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* cta*/}
            <div>
              <Link
                href={"#"}
                className="px-5 py-4 text-white hidden md:inline-block rounded-lg bg-primary"
              >
                Get Started
              </Link>
              <button onClick={mobileMenuHandler} className="block md:hidden">
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/*for mobile and tablet device */}
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999] "
            : "py-0 hidden "
        }
      >
        <div
          onClick={mobileMenuHandler}
          className="w-screen h-screen bg-black bg-opacity-50 z-[999] top-0 fixed"
        ></div>
        <div className="w-[385px] h-screen bg-white  z-[9999] top-0 right-0 fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              onClick={mobileMenuHandler}
              className="flex space-x-3 items-center"
            >
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smoothe">
            <ul className="block mb-7">
              {navigationMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    className="group flex items-center py-2 duration-300 transition-all
                     ease-in-out hover:text-primary"
                    href={item.href}
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
