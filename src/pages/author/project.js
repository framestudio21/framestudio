import React from 'react'
import dynamic from 'next/dynamic';
import { BiLeftArrowCircle } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';

import styles from "./styles/project.module.css"

import Notenavbar from "./component/notenavbar"
import Adminnavbar from "../../components/adminnavbar"

export default dynamic(() => Promise.resolve(Project), { ssr: false });
function Project() {
  return (
    <>
    <Adminnavbar/>
    <Notenavbar/>
    <main className={styles.projectmainbody}>
        {/* <button className={styles.closebtn}>
            <BiLeftArrowCircle/> back
        </button> */}
    <div className={styles.maindiv}>
    <div className={styles.headertext}>Project Upload Section</div>
        <form className={styles.formdiv}>
            <div className={styles.mandatoryinputdiv}>
                <div className={styles.divleftside}>
                    <label className={styles.text}>the mandatory section</label>
                    <input type='text' placeholder='enter project title' name='title' className={styles.inputfield} />
                    <input type='text' placeholder='enter project thumbnail link' name='thumbnail' className={styles.inputfield} />
                <input type='date' placeholder='enter project behance link' name='date' className={styles.inputfield} />
                </div>
                <div className={styles.divrightside}>
                <input type='text' placeholder='enter project facebook link' name='facebooklink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project instagram link' name='instagramlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project pinterest link' name='pinterestlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project dribble link' name='dribblelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project twitter link' name='twitterlink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project behance link' name='behancelink' className={styles.inputfield} />
                    <input type='text' placeholder='enter project drive link' name='drivelink' className={styles.inputfield} />
                </div>
            </div>

        <div className={styles.newaddinputdiv}>

            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your text' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className={styles.textarea}>
                <textarea className={styles.textareainputfield} placeholder='enter your quote' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

            <div className={styles.imagearea}>
                <input type='text' className={styles.imageinputfield} placeholder='enter your image link' />
                <button className={styles.divclosebtn}>
                    <AiFillCloseCircle />
                </button>
            </div>

        </div>

        </form>
    </div>
    </main>
    </>
  )
}