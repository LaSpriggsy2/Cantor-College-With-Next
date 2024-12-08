// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }


// import Image from "next/image";
//"use client"
import Image from 'next/image';
import './styles/mobile.css'
import './styles/desktop.css'
//import Facilities from "./Components/Facilities";
import Footer from "./Components/Footer";
// import LearningResources from "./Components/LearningResources";
// import ImportantInformation from "./Components/ImportantInformation";
// import WorkingWithBusinesses from "./Components/WorkingWithBusinesses";
// import Courses from "./Components/Courses";
// //import { useEffect } from "react";
// import CampusMap from "./Components/CampusMap";
import Header from './Components/Header';
import Welcome from './Components/Main';
const Home = () =>{
//  useEffect(()=>{

    // let sectionBars = document.querySelectorAll(".sectionBar");
    
    // console.dir(sectionBars);
    // let hiddenSections = document.querySelectorAll(".hidden");
   
    // let bar = 0;
    // for(let i=0; i<sectionBars.length; i++){
    //   sectionBars[i].addEventListener("click", RevealSection);
      
    // }
    
    // function RevealSection(ev){
    //   console.dir(ev.target.classList[0]);
    //   let sectionName = ev.target.classList[0];
    //   console.dir(sectionName);
    //   let sectionElement = document.getElementById(sectionName);
    //   console.dir(sectionElement);
    //   if(sectionElement.classList.contains("hidden")){
    //     let sections = document.querySelectorAll(".section");
    //     console.dir(sections);
    //     if(sections.length==1){
    //       document.querySelector(".section").setAttribute("class","hidden");
    //       document.getElementById("selectedBar").removeAttribute("id");
    //     }
    //     document.querySelector("."+sectionName).setAttribute("id","selectedBar");
    //     sectionElement.setAttribute("class", "section");
    //   }
    //   else if(sectionElement.classList.contains("section")){
    //     sectionElement.setAttribute("class", "hidden");
    //     document.getElementById("selectedBar").removeAttribute("id");
        
    //   }
    // }
//     let aboutUsImageAr = [
//       './images/cantorPic1.jpg',
//       './images/cantorPic2.jpg'
      
//     ];
//     let aboutUsImage = document.getElementById("cantorPics");
// let imageCounter1 = 0;
// // aboutUsImage.setAttribute("src", "/images/cantorPic1.jpg")
// function chgAboutUsImage(){
//     if(imageCounter1 == aboutUsImageAr.length){imageCounter1=0;}
//     aboutUsImage.setAttribute("src", aboutUsImageAr[imageCounter1]);
//     imageCounter1++
//     console.info(imageCounter1);
// }
// setInterval(chgAboutUsImage, 10000);

//  });
    return(
      <html>
  <body>
    <Header></Header>
   {/* <header>
     <div className="homepageHeader">
        <Image src="/images/logo.jpg" width="112" height="100" alt="cantor college logo" className="cantorLogo"/>
        <h1 className="cantorTitle">Cantor Home</h1>
      </div>
      <div className="navigationBar">
            <div className="courses sectionBar">
                Courses
            </div>
            <div className="facilities sectionBar">
                Facilities
            </div>
            <div className="campusMap sectionBar">
                Campus Map and Where to Find Us
            </div>
            <div className="learningResources sectionBar">
                Learning Resources
            </div>
            <div className="importantInformation sectionBar">
                Important Information
            </div>
            <div className="workingWithBusinesses sectionBar">
                Working with Businesses
            </div>
      </div>
    </header> */}
    <main>
{/* <Courses></Courses>
<Facilities></Facilities>
<CampusMap></CampusMap>
<LearningResources></LearningResources>
<ImportantInformation></ImportantInformation>
<WorkingWithBusinesses></WorkingWithBusinesses> */}
{/* <div className="infoBox" id="welcomeBox">
<h2 id="aboutUsTitle"><b>About Us</b></h2>
  
  <img src="/images/cantorPic2.jpg" alt="image of cantor college" width="1000" height="750" 
className="welcomeImage" id="cantorPics" />

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
</div> */}
<Welcome></Welcome>
</main>
<Footer></Footer>
</body>
</html>

)
}
export default Home;
