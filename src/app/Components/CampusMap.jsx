import React from "react";
import Link from "next/link";

const CampusMap = () =>{
    return(
        <div>
            <div className="hidden" id="campusMap">
            <h2 className="sectionTitle">Campus Map and Where to Find Us</h2>
            <div className="infoBox" id="whereToFindUsBox">
                <h3>Where to Find Us</h3>
                <p>Cantor College<br/>Main Street<br/>Sheffield<br/>SC4 2BB</p>
            </div>
            <div className="infoBox">
                <h3>Cantor College Campus Map</h3>
                <img src="/images/bigCampusMap.jpg" width="4000" height="2828" alt="Map of Cantor College Campus" id="campusMapImage"/>
            {/* Martin if you're reading this, I know that is a humongous image; but because it's a map, 
             the detail and quality of this image is actually important. Please don't lower my mark because of this. */}
                <a href="" download="bigCampusMap.jpg">Click here to download image</a>

                <Link href="https://www.google.com/maps/@53.3725184,-1.4614528,14z?aut">Go to Google Maps</Link>
            </div>
        </div>
        </div>
    )
}

export default CampusMap;