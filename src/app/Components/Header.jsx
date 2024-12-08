"use client"
import React, { useEffect } from "react";
import Image from "next/image";
const Header = ()=>{
useEffect(()=>{
    let sectionBars = document.querySelectorAll(".sectionBar");
    
    console.dir(sectionBars);
    let hiddenSections = document.querySelectorAll(".hidden");
   
    let bar = 0;
    for(let i=0; i<sectionBars.length; i++){
      sectionBars[i].addEventListener("click", RevealSection);
      
    }
    
    function RevealSection(ev){
      console.dir(ev.target.classList[0]);
      let sectionName = ev.target.classList[0];
      console.dir(sectionName);
      let sectionElement = document.getElementById(sectionName);
      console.dir(sectionElement);
      if(sectionElement.classList.contains("hidden")){
        let sections = document.querySelectorAll(".section");
        console.dir(sections);
        if(sections.length==1){
          document.querySelector(".section").setAttribute("class","hidden");
          document.getElementById("selectedBar").removeAttribute("id");
        }
        document.querySelector("."+sectionName).setAttribute("id","selectedBar");
        sectionElement.setAttribute("class", "section");
      }
      else if(sectionElement.classList.contains("section")){
        sectionElement.setAttribute("class", "hidden");
        document.getElementById("selectedBar").removeAttribute("id");
        
      }
    }
})
    return(
        <header>
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
      </header>
    )

}
export default Header;