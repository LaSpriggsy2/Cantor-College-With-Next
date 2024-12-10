"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
const Welcome = ()=>{
  const images = [
    {path: "images/cantorPic1.jpg", alt:"Image of Cantor College"},
    {path: "images/cantorPic2.jpg", alt:"Image of Cantor College"},
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  useEffect(()=>{
    const interval = setInterval(() => {
      nextSlide();
  }, 5000);
  return () => clearInterval(interval);
}, [nextSlide]);
    // let aboutUsImageAr = [
    //   './images/cantorPic1.jpg',
    //   './images/cantorPic2.jpg'
      
    // ];
    // let a = getElementById("cantorPics");
    // let imageCounter1 = 0;
    // // aboutUsImage.setAttribute("src", "/images/cantorPic1.jpg")
    // function chgAboutUsImage(){
    //   if(imageCounter1 == aboutUsImageAr.length){imageCounter1=0;}
    //   aboutUsImage.setAttribute("src", aboutUsImageAr[imageCounter1]);
    //   imageCounter1++
    //   console.info(imageCounter1);
    // }
    // setInterval(chgAboutUsImage, 10000);
  
    return(
      <div>
<div className="infoBox" id="welcomeBox">
<h2 id="aboutUsTitle"><b>About Us</b></h2>
<div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
{images.map((image, index) => (
  <img key={index} src={image.path} alt={image.alt} width="1000" height="750" 
  className="welcomeImage" id="cantorPics" />
))}
</div>

<p id="welcomeText">
Cantor College was established in 1989 to specialize in Computing and Design.   
At Cantor College, we want to give students the education they need to achieve their career aims, 
leaving them equipped with the knowledge, skills and experience to succeed. 
Cantor College gives you the opportunities that can give you the edge when you enter the world of work, 
through our teaching and our links to some of the world's leading researchers and employers. 
Our students have gone on to successful careers in a wide range of industries across the globe.  
Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, 
both as a student and in your future career.
</p>
</div>
</div>
);
};
export default Welcome;