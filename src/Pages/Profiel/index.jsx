import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profielpage(){
    const[isloged,setisloged] =useState(false);

    const Navigate = useNavigate()
    useEffect (()=>{
        let token = localStorage.getItem("token");
        if (token ) {
            setisloged(true);
        }
        else{
            Navigate("/login");
        }

    },[])
    return(
        isloged && (
            <div className="Profielpage">
            <h1>profirl page </h1>
            <button onClick={()=>{localStorage.removeItem("token");
               Navigate("/login");
            }} className=" btn btn-danger">Logout</button>
        </div>
        )
        
    )
}