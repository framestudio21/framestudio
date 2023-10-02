import React from 'react'
import dynamic from 'next/dynamic';

import Notenavbar from "./component/notenavbar"
import Adminnavbar from "../../components/adminnavbar"
import styles from "./styles/home.module.css"

export default dynamic(() => Promise.resolve(Home), { ssr: false });
function Home() {
  return (
    <>
    <Adminnavbar/>
    <div className={styles.mainbody}>
        <Notenavbar/>
    author home body
    </div>
    </>
  )
}