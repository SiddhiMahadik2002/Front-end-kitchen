import React, { useEffect } from "react";
import indian from "../../img/Indian.jpg"
import Aos from "aos";
import "aos/dist/aos.css"
import "./countries.css"
export const Countries=()=>{
    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return(
        <div className="countrycard">
          <div data-aos="fade-up" className="singlecountrycard singlecountrycard1">
            <div className="countryoverlay">

            </div>
            <h2>Indian</h2>
          </div>  
          <div data-aos="fade-up" className="singlecountrycard singlecountrycard2">
            <div className="countryoverlay">

            </div>
            <h2>Italian</h2>
          </div>  
          <div  data-aos="fade-up" className="singlecountrycard singlecountrycard3">
            <div className="countryoverlay">

            </div>
            <h2>French</h2>
          </div>  
          <div data-aos="fade-up" className="singlecountrycard singlecountrycard4">
            <div className="countryoverlay">

            </div>
            <h2>Chinese</h2>
          </div>  
          <div data-aos="fade-up" className="singlecountrycard singlecountrycard5">
            <div className="countryoverlay">

            </div>
            <h2>Japanese</h2>
          </div>  
          <div  data-aos="fade-up" className="singlecountrycard singlecountrycard6">
            <div className="countryoverlay">

            </div>
            <h2>Thai</h2>
          </div>  
          <div data-aos="fade-up" className="singlecountrycard singlecountrycard7">
            <div className="countryoverlay">

            </div>
            <h2>Australian</h2>
          </div>  
          <div data-aos="fade-up" className="singlecountrycard singlecountrycard8">
            <div className="countryoverlay">

            </div>
            <h2>Turkish</h2>
          </div>  
        </div>
    )
}