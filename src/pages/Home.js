import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "../CSS/content.css"

export default function Home()
{
    function request() {
        axios({
            method:"post",
            url:"http://localhost:8080/test"
        })
        .then(function(res) {
            console.log(res.data);
        })
    }

    return (
        <div className="content">
            <h1 style={ { color: "white" } } >Welcome to the F1 app!</h1>
            <Button onClick={request}>Make POST Request</Button>
        </div>
    )
}

