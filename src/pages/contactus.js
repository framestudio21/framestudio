import dynamic from "next/dynamic";

import styles from "../styles/contactus.module.css";

import Navbar from "../components/navbar";

export default dynamic(() => Promise.resolve(Contactus), { ssr: false });
const Contactus = () => {
  return (
    <>
      <Navbar />
      <div className={styles.mainbody}>
       <div className={styles.leftside}>
        bdifbi
       </div>
       <div className={styles.rightside}>
        ldskfbisdb
       </div>
      </div>
    </>
  );
};
