import React from "react";
import "./heroarea.css"
export const HeroArea = () => {
    return (
        <div className="m-10 heroarea">
            <div>
                <h2 className="text-5xl font-bold mb-4">Siddhi's Kitchen</h2>
                <p className="text-xl text-lightblack">Helping you to cook varieties of dishes from all over the world.</p>
                <div className="searchbarbox  ">
                   <p>Search Recipe </p>
                   <div className="inputbox">
                    <div className="searchinputicon ">
                     <input type="text" />
                     <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <div className="searchbtn">
                        <button>SEARCH</button>
                    </div>
                   </div>
                   <div className="popularsearches">
                    <p>Popular Search</p>
                    <div className="specialitems">
                        <p>Butter Chicken</p>
                        <p>Biryani</p>
                        <p>Pav Bhaji</p>
                        <p>Paneer Tikka</p>
                        <p>Fish Curry</p>
                    </div>
                   </div>

                </div>
            </div>
            <div className="rightheroarea">

            </div>
        </div>

    )
}