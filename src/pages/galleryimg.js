import Navbar from "../components/navbar";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Gallery from "react-photo-gallery";
import ImageGallery from "react-image-gallery";

import styles from "../styles/home.module.css";

import { BsArrowBarLeft } from "react-icons/bs";

export default dynamic(() => Promise.resolve(Galleryimg), { ssr: false });

const Galleryimg = () => {
  // image view component


//   const [data, setData] = useState({});
//   const viewImage = (item) => {
//     setData(item);
//   };

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/digitalart";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data))
      .catch(() => router.push("/404"));
  }, []);

  // close button

//   const close = () => {
//     setData({});
//   };

// const photos = [
//   {
//     src: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     width: 1,
//     height: 3,
//   },
//   {
//     src: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     width: 1,
//     height: 1,
//   },
//   {
//     src: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     width: 2,
//     height: 1,
//   },
//   {
//     src: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     width: 1,
//     height: 3,
//   },
//   {
//     src: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     width: 5,
//     height: 1,
//   },
//   {
//     src: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     width: 2,
//     height: 5,
//   },
//   {
//     src: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     width: 2,
//     height: 1,
//   },
//   {
//     src: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     width: 2,
//     height: 5,
//   },
// ]

// const photos = [
//    imgs.map((item)=>{
//     return(
//         {
//             src: item.thumbnail,
//             width: item.width,
//             height: item.height,
//             // alt: item.name,
//             // Key: item._id
//         }
//     )
//    })
// ]

// const images = [
//   {
//     original: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     thumbnail: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//   },
//   {
//     original: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     thumbnail: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//   },
//   {
//     original: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     thumbnail: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//   },
//   {
//     original: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     thumbnail: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//   },
//   {
//     original: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//     thumbnail: 'https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg',
//   },
// ]

const images = [
  imgs.map((item)=>{
        return(
            {
                original: item.thumbnail,
                thumbnail: item.thumbnail
            }
        )
       })
]


console.log(images);
  return (
    <>
           <Head>
      <title>GALLERY</title>
      <meta name="description" content="Varities of Digital Art Designs and order item."/>
    </Head>
      <Navbar />
      <div className={styles.masonrymainbody}>
      {/* <Gallery photos={photos} /> */}
      <ImageGallery items={images} />
      </div>
    </>
  );
};


// {data.thumbnail && (
//     <div className={styles.imagedisplaydiv} onClick={close}>
//       <button name="close" onClick={close} className={styles.closebtn}>
//         <BsArrowBarLeft className={styles.leftarrow} /> close
//       </button>

//       <Image
//         src={data.thumbnail}
//         className={styles.image}
//         width={data.width}
//         height={data.height}
//         alt={data.name}
//       />

//       {data.author && <p className={styles.imageauthor}>{item.author}</p>}
//     </div>
//   )}

{/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 800: 3, 900: 5 }}>
          <Masonry columnsCount={5}>
            {imgs.map((item) => {
              return (
                <div key={item._id}>
                  {item.thumbnail && (
                    <Image
                      src={item.thumbnail}
                      alt={item.name}
                      className={styles.digitalartimage}
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
        </ResponsiveMasonry> */}