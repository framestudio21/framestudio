import React, { useState } from "react";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi"

import framelogo from "../image/frame-logo.svg";
import framestudiologo from "../image/frame-studio-2.svg";

import dynamic from "next/dynamic";
import Link from "next/link";

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

const Navbar = () => {
  const [display, setDisplay] = useState("hideNav");

  const click = () => {
    if (display == "hideNav") setDisplay("showNav");
    else setDisplay("hideNav");
  };

  return (
    <div>
      <nav>
        <div className="container">
          <button className="hamburger" onClick={click}>
            <GiHamburgerMenu />
          </button>
          <div className="logo">
            <Image
              src={framelogo}
              className="mainlogo"
              alt="Logo"
              width={0}
              height={0}
              loading='lazy'
            />
          </div>
        </div>
        <div className="navlist" id={display}>
          <div className="navlogo">
            <Image 
            src={framestudiologo}
            alt="Logo" width={220} height={100} loading='lazy' unoptimized />
          </div>
          <ul>
            <Link href="/" rel="follow">
              <li>HOME</li>
            </Link>
            <Link href="/graphic" rel="follow">
              <li>GRAPHICS DESIGN</li>
            </Link>
            <Link href="/website" rel="follow">
              <li>WEB DESIGN</li>
            </Link>
            <Link href="/digitalart" rel="follow">
              <li>DIGITAL ART</li>
            </Link>
            <Link href="/aiart" rel="follow">
              <li>AI ART</li>
            </Link>
            <Link href="/photography" rel="follow">
              <li>PHOTOGRAPHY</li>
            </Link>
            <Link href="/about" rel="follow">
              <li>ABOUT</li>
            </Link>
            <Link href="/contact" rel="follow">
              <li>CONTACT</li>
            </Link>
          </ul>
          <style jsx>
            {`
                #showNav{
                    display: block;
                }
                #hideNav{
                    display: none;
                }
            `}
          </style>
        </div>
      </nav>
    </div>
  );
};
