"use client"
import React from "react";
import { useEffect, useState } from "react";
const Facilities = () =>{
// useEffect(()=>{
//     let facilitiesImageAr = [
//         './images/cantorAtriumInside2.jpg',
//         './images/cantorAtriumInside3.jpg',
//         './images/cantorAtriumInside1.jpg'
        
//       ];
//       let facilitiesImage = document.getElementById("cantorAtrium");
// let imageCounter = 0;
// facilitiesImage.setAttribute("src", "images/cantorAtriumInside1.jpg")
// function chgFacilitiesImage(){
//     if(imageCounter == facilitiesImageAr.length){imageCounter=0;}
//     facilitiesImage.setAttribute("src", facilitiesImageAr[imageCounter]);
//     imageCounter++
//     console.info(imageCounter);
// }
// setInterval(chgFacilitiesImage, 5000);
// })
let facilitiesImageAr = [
            'images/cantorAtriumInside2.jpg',
            'images/cantorAtriumInside3.jpg',
            'images/cantorAtriumInside1.jpg'
            
          ];
const images = [
    { path: "images/cantorAtriumInside1.jpg", alt: "Cantor college atrium" },
    { path: "images/cantorAtriumInside2.jpg", alt: "Cantor college atrium" },
    { path: "images/cantorAtriumInside3.jpg", alt: "Cantor college atrium" },
    
];
// const [currentIndex, setCurrentIndex] = useState(0);
let imageNumber =0;
const nextImage = () => {
    imageNumber++
    if(imageNumber==facilitiesImageAr.length){imageNumber=0;}
    console.info(imageNumber);
    // setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // let imageSource = facilitiesImageAr[imageNumber]
    // =imageSource;
};

useEffect(() => {
    const interval = setInterval(() => {
        nextImage();
    }, 5000);
    return () => clearInterval(interval);
}, [nextImage]);

    return(
        <div className="hidden" id="facilities">
            <h2 className="sectionTitle">Facilities at Cantor College</h2>
            <div className="sectionInfo" id="facilitiesInfo">
                
            <div className="infoBox">
                <h3>Facilities</h3>
                <p>
                    The College is located in the attractive and pleasantly refurbished Building. 
                    The building houses computing laboratories, and lecture/tutorial rooms. 
                    It has its own catering facilities and student work areas. 
                    There is also a car park to the back of the building.
                    <br/>
                    <br/>
                    Our building has space of 9500m², 
                    houses over 240 staff and provides teaching space for more than 1600 students.

                </p>

            </div>
            {/* {images.map((image, index) => (
                    <img key={index} src={image.path} alt={image.alt} className="decorativeImage" id="cantorAtrium"/>
                ))} */}
                
                    <img src={images[imageNumber].path} width="1080" height="720" alt="Cantor college atrium" className="decorativeImage" id="cantorAtrium"/>
                
            {/* <img src="/images/cantorAtriumInside1.jpg" width="1080" height="720" alt="Cantor college atrium" className="decorativeImage" id="cantorAtrium"/> */}
            <div className="infoBox" id="facilitiesList">
                <h3>Facilities include:</h3>
                <ul className="bulletPoints">
                <li>wi-fi technology</li>
                <li>pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
                <li>specialist faculty facilities</li>
                <li>a double height lecture theatre at first and second floor level</li>
                <li>dramatic three-storey glass open atrium</li>
                <li>meeting rooms</li>
                <li>office accommodation</li>
                <li>specialist IT facilities</li>
                <li>reception desk area</li>
                <li>catering outlet</li>
                <li>parking for disabled badge holders</li>
                <li>cycle racks</li>
                <li>gallery</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Facilities;