import React, { useState } from "react";
import Image from "next/image";

import styles from "./styles/navbar.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiFillRobot, AiFillInfoCircle } from "react-icons/ai";
import { MdDesignServices, MdAddAPhoto, MdContacts } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiAdobeindesign } from "react-icons/si";

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
      <nav className={styles.navbody}>
        <div className={styles.container}>
          <button className={styles.hamburger} onClick={click}>
            <GiHamburgerMenu />
          </button>
          <div className={styles.logo}>
            <Image
              src={framelogo}
              className={styles.mainlogo}
              alt="Logo"
              width={0}
              height={0}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.navlist} id={display}>
          {/* <div className={styles.navlogo}>
            <Image 
            src={framestudiologo}
            alt="Logo" width={220} height={100} loading='lazy' unoptimized />
          </div> */}
          <ul>
            <Link href="/" rel="follow">
              <li>
                {/* <AiFillHome className={styles.navicon} /> */}
                HOME
              </li>
            </Link>
            <Link href="/graphic" rel="follow">
              <li>
                {/* <MdDesignServices className={styles.navicon} /> */}
                GRAPHIC DESIGN
              </li>
            </Link>
            <Link href="/website" rel="follow">
              <li>
                {/* <CgWebsite className={styles.navicon} /> */}
                WEB DESIGN
              </li>
            </Link>
            <Link href="/digitalart" rel="follow">
              <li>
                {/* <SiAdobeindesign className={styles.navicon} /> */}
                DIGITAL ART
              </li>
            </Link>
            <Link href="/aiart" rel="follow">
              <li>
                {/* <AiFillRobot className={styles.navicon} /> */}
                AI ART
              </li>
            </Link>
            <Link href="/photography" rel="follow">
              <li>
                {/* <MdAddAPhoto className={styles.navicon} /> */}
                PHOTOGRAPHY
              </li>
            </Link>
            <Link href="/about" rel="follow">
              <li>
                {/* <AiFillInfoCircle className={styles.navicon} /> */}
                ABOUT
              </li>
            </Link>
            <Link href="/contact" rel="follow">
              <li>
                {/* <MdContacts className={styles.navicon} /> */}
                CONTACT
              </li>
            </Link>
          </ul>
          <style jsx>
            {`
              #showNav {
                display: block;
              }
              #hideNav {
                display: none;
              }
            `}
          </style>
        </div>
      </nav>
    </div>
  );
};
