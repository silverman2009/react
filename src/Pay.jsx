import React from 'react'
import axios from "axios"
import {Redirect} from "react-router-dom"

const Pay = () => {
    const data ={
        Amount : 5000,
        BusinessId: "121",
        LicenseId : "1221"
    }
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }
    const handleSendReq = () => {
        axios.post("https://avrin.tech/PnBs/Send.php", data , config)
            .then((res) => {
               
               window.location= res.data
        })
            .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <button onClick={handleSendReq} className="btn btn-danger">کلیک</button>
        </div>
    )
}

export default Pay
