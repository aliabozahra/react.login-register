import { use, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Loginpage(){
   const useremail  = useRef();    
   const userpassword  = useRef(); 
   const Navigate = useNavigate();
   const[isopen,setisopen] =useState(false);
   useEffect(()=>{
    if (localStorage.getItem("token")) {
        setisopen(true);
        Navigate('/');
    }
    else if (localStorage.getItem("emailDp") && localStorage.getItem("passDp")) {
        setisopen(true);
    }
    else{
        Navigate('/register');
    
    }
   },[])   
   const handelsubmit = ()=>{
        event.preventDefault();
        let email = useremail.current.value;
        let pass = userpassword.current.value;
        if (email==localStorage.getItem("emailDp") && pass==localStorage.getItem("passDp") ) {
            let tokenrand = Math.random();
            localStorage.setItem("token",tokenrand);
            Swal.fire({
                text:"success Login",
                icon: "success",
                timer: 1200,
            });
            Navigate('/');
            
        }else{
            Swal.fire({
                text:"wrong a emil or password",
                icon: "error",
                timer: 1200,
            })
        }
    }
    return(
        isopen && (
            <div className=" col-12 loginpage d-flex justify-content-center align-items-center">
            <form onSubmit={handelsubmit}  className=" d-flex flex-column shadow border col-12 col-md-8 col-lg-4 gap-3 p-2 bg-white">
                <input ref={useremail} type="email" placeholder="Enter your email" className=" col-12 form-control" />
                <input ref={userpassword} type="password" placeholder="Enter your password" className=" col-12 form-control" />
                <button className="btn btn-primary">Login</button>

    
            </form>
        </div>
        )
      
    )
}