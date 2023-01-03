import React, { useEffect, useState } from "react";
import {collection,getDocs,doc} from "firebase/firestore"
import { db } from "../../firebase";
import "./allrecipes.css"
export const AllRecipes = () => {
    const[allrecipes,setallrecipes] = useState([])
    const [featuredimg, setfeaturedimg] = useState("https://curlytales.com/wp-content/uploads/2017/06/Shiv-Mishthan-Bhandar.jpg")
    const [title, settitle] = useState("This is the title")
    const [description, setdescription] = useState("this is the description")


    const fetchrecipe=async()=>{
        await getDocs(collection(db,"Recipes")).then((query)=>{
            const data = query.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id
            }))
            setallrecipes(data)
        })
    }
    useEffect(()=>{
        fetchrecipe()
    },[])
    return (
        <div className="recipeslisting">
         {
            allrecipes.map(recipe=>(
                <div className="singlerecipecardar">
                <div className="arimg">
                    <img src={recipe.imgurl} alt="" />

                </div>
                <div className="aroverlay"></div>
                <div className="armetainfo">
                    <h2 >{recipe.title}</h2>
                   
                </div>


            </div>
            ))
         }
        </div>
    )
}