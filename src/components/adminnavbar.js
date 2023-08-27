import React from 'react'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { FaUserCircle } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsArrowBarLeft } from 'react-icons/bs';

import { AuthContext } from "../components/context";

import logo from "../image/frame-logo.svg"

export default dynamic (() => Promise.resolve(navbar), {ssr: false})

const navbar = () => {

    const router = useRouter()
    const [display, setDisplay] = useState("hideNav");

    const click = () => {
      if (display == "hideNav") setDisplay("showNav");
      else setDisplay("hideNav");
    };

    const {setIsAdmin} = useContext(AuthContext)
    const logout = () => {
        setIsAdmin("no")
        router.push("/admin");
    }

    return (
        <div>
            <nav>
                <div className="container">
                    <div className="hamburger" onClick={click}>
                        <GiHamburgerMenu/>
                    </div>
                    <div className="logo">
                        <Image 
                        src={logo}
                        alt="Logo"
                        className="mainlogo"
                        width={200}
                        height={40}
                        loading='lazy'
                        />
                    </div>
                    <div className="adminuser">
                    <FaUserCircle className='hamburger' />
                    </div>
                </div>
                <div className='navlist' id={display}>
                    <ul>
                        <Link className='ullink' href="home"><li>HOME</li></Link>
                        <Link className='ullink' href="upload"><li>UPLOAD SECTION</li></Link>
                        <Link className='ullink' href="projectdata"><li>PROJECT DATA</li></Link>
                    <button className='ullink'  onClick={()=>logout()} ><li>
                        <BsArrowBarLeft className='buttonicon' /> Logout</li>
                        </button>
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
    )
}
