import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import styles from "../styles/home.module.css";
import Navbar from "../components/navbar";

import { BsArrowBarLeft } from "react-icons/bs";

export default dynamic(() => Promise.resolve(Photography), { ssr: false });

const Photography = () => {
  // image view component
  const [data, setData] = useState({});
  const viewImage = (item) => {
    setData(item);
  };

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/photography";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data))
      .catch(() => router.push("/404"));
  }, []);

  // close button

  const close = () => {
    setData({});
  };

  return (
    <>
           <Head>
      <title>FRAME STUDIO - PHOTOGRAPHY</title>
      <meta name="description" content="Varities of Photography Images"/>
    </Head>
      <Navbar />
      <div className={styles.masonrymainbody}>
        {data.thumbnail && (
          <div className={styles.imagedisplaydiv} onClick={close}>
            <button name="close" onClick={close} className={styles.closebtn}>
              <BsArrowBarLeft className={styles.leftarrow} /> close
            </button>

            <Image
              src={data.thumbnail}
              className={styles.image}
              width={0}
              height={0}
              alt={data.name}
            />

            {data.name && (
              <p className={styles.imageauthor}>
                author : <br /> {data.author}
              </p>
            )}
          </div>
        )}

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 800: 3, 1020: 4, 1280: 5 }}>
          <Masonry columnsCount={5}>
            {imgs.map((item) => {
              return (
                <div  key={item._id}>
                  {item.thumbnail && (
                    <Image
                      key={item._id}
                      src={item.thumbnail}
                      className={styles.photographyimage}
                      alt={item.name}
                      width={0}
                      height={item.height}
                      onClick={() => viewImage(item)}
                      // loading="lazy"
                      optimized
                      // priority
                    />
                  )}
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
