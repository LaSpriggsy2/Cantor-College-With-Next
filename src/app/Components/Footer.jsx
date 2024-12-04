import React from "react";
const Footer = () =>{
    return(
        <footer>
        <div className="contactUs">
        Contact us:
        <div className="mediaLinks">
            <a href="https://www.facebook.com">
                <img  src="images\facebookIcon.png" alt="Facebook icon" className="mediaLink"/>
            </a>
            <a href="https://www.instagram.com" >
                <img src="images\intagramIcon.png" alt="Instagram logo" className="mediaLink"/>
            </a>            
            <a href="https://www.twitter.com">
                <img  src="images\twitterIcon.png" alt="Twitter logo" className="mediaLink"/>
            </a>
            <a href="https://www.youtube.com">
                <img  src="images\youtubeIcon.png" alt="YouTube logo" className="mediaLink"/>
            </a>
            
        </div>
        <p className="contactDetails">
            <a href="">Tel:(01321) 2340 235</a>
            <a href="">Fax: (01321) 2340 236</a>
            <a href="">Email: info@cantorcollege.ac.uk</a>

        </p>
      </div>
      <div className="copyrightNotice">
        <a href="https://www.gov.uk/guidance/copyright-notices">COPYRIGHT NOTICE</a>
      </div>
      </footer>
    )
}

export default Footer;