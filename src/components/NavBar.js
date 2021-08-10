import React from "react";
import "../CSS/content.css"
import styles from "../CSS/content.css"
import { Link } from "react-router-dom"


export default function Nav() { 
    return (
        <div className="NavBar">
            <Link to="/Machine-Learning">
                {/* <h2 style={{color: "white", fontSize:25}}>Home</h2> */}
                <button className="btn" style={{color:"white"}}>Machine Learning</button>
            </Link>
        </div>
    )
}