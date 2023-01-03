import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

export const Header=()=>{
   return(
    <header>
        <div className="flex justify-between items-center m-10" >
            <div>
                <h2 className="text-2xl font-medium text-primary">Siddhi's Kitchen</h2>
            </div>
            <div className="flex items-center">
                <p className="mx-2.5 text-lg font-semibold"> <Link to="/allrecipes">All Recipes</Link></p>
                <p className="mx-2.5 text-lg font-semibold" ><Link to="/about">About Us</Link></p>
                <p className="mx-2.5 text-lg font-semibold"><Link to="/contact">Contact</Link></p>
                <p className=" searchicon mx-2.5"><ion-icon name="search-outline"></ion-icon></p>
            </div>
        </div>
        

    </header>
   )
}
