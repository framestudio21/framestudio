import dynamic from "next/dynamic";

import styles from "../styles/contactus.module.css";

import Navbar from "../components/navbar";

export default dynamic(() => Promise.resolve(Contactus), { ssr: false });
const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className={styles.mainbody}>
        {/* line design */}
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
        <div className={styles.line4}></div>
        <div className={styles.line5}></div>

        <div className={styles.heading}>contact us</div>
        <div className={styles.heading1}>say hi to the team</div>

        <div className={styles.fromdiv}>
            {/* <div className={styles.text1}>we're open for any suggestion or just to have a chat</div> */}
            <div className={styles.text}>feel free to contact us and we will get back to you as soon as we can</div>
        </div>
      </div>
    </>
  );
};
