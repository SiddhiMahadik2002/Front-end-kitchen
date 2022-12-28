import React from "react";
import { Countries } from "../../Components/Countries/countries";
import { HeroArea } from "../../Components/HeroArea/heroarea";
 export const Home=()=>{
    return(
        <div>
            <HeroArea/>
            <Countries/>
        </div>
    )
 }