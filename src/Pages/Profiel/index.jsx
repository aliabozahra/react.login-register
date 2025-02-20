import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profielpage(){
    const Navigate = useNavigate()
    useEffect (()=>{
        let token = sessionStorage.getItem("token")
        if (token && token ==1234) {
        }
        else{
            Navigate("/login");
        }

    },[])
    return(
        <div className="Profielpage">
            <h1>profirl page </h1>
            <button onClick={()=>{sessionStorage.clear();
               Navigate("/login");
            }} className=" btn btn-danger">Logout</button>
        </div>
    )
}