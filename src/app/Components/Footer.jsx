"use client"
import Image from "next/image";
import React from "react";
const Footer = () =>{
    const CopyToClipboard = ({ text, label }) =>{
        const handleCopy = async (e) => {
          e.preventDefault(); 
      
      
          try {
            await navigator.clipboard.writeText(text);
            alert('copied ${text}');
          } catch (error) {
            console.error("Failed to copy text: ", error);
            alert("Failed to copy text.");
          }
        }
        return (
            <a
            href="#"
            onClick={handleCopy}
            >
          {label}
        </a>
      );
    }
      return(
        <footer>
        <div className="contactUs">
        Contact us:
        <div className="mediaLinks">
            <a href="https://www.facebook.com">
                <img  src="images\facebookIcon.png" alt="Facebook icon" className="mediaLink" width="100" height="102"/>
            </a>
            <a href="https://www.instagram.com" >
                <img src="images\instagramIcon.png" alt="Instagram logo" className="mediaLink" width="100" height="100"/>
            </a>            
            <a href="https://www.twitter.com">
                <img  src="images\twitterIcon.png" alt="Twitter logo" className="mediaLink" width="100" height="107"/>
            </a>
            <a href="https://www.youtube.com">
                <img  src="images\youtubeIcon.png" alt="YouTube logo" className="mediaLink" width="100" height="100"/>
            </a>
            
        </div>
        <div className="contactDetails">
            <p>Tel: <CopyToClipboard text="01321 2340 235" label="(01321) 2340 235"/></p>
            <p>Fax: <CopyToClipboard text="01321 2340 236"  label="(01321) 2340 236"/></p>
            <p>Email: <CopyToClipboard text="info@cantorcollege.ac.uk" label="info@cantorcollege.ac.uk"/></p>
        </div>
      </div>
      <div className="copyrightNotice">
        <a href="https://www.gov.uk/guidance/copyright-notices">COPPYRIGHT NOTICE &copy; {new Date().getFullYear()}</a>
      </div>
      </footer>
    )
};

export default Footer;