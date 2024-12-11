import React from "react";
import Image from "next/image";
const Header = () =>{

    return(
        <div className="homepageHeader">
        <Image src="/images/logo.jpg" width="112" height="100" alt="cantor college logo" className="cantorLogo"/>
        <h1 className="cantorTitle">Cantor Home</h1>
      </div>
    )
}
export default Header;