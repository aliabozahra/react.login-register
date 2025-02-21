import { use, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Registerpage(){
    const Navigate =useNavigate();
    const regemail = useRef();
    const regpass = useRef();
    useEffect(()=>{
        if(localStorage.getItem("token")){
            Navigate('/');
        }
      else if (localStorage.getItem("emailDp") && localStorage.getItem("passDp")) {
            Navigate('/login');
        }
       
    },[])
    


    const handelsubmit=()=>{
        event.preventDefault();
        let emil =regemail.current.value;
        let pass=regpass.current.value;
        localStorage.setItem("emailDp",emil);
        localStorage.setItem("passDp",pass);
        Navigate('/login');
        
    }


    return(
        <div className="Registerpage col-12 d-flex justify-content-center align-items-center">
            <form onSubmit={handelsubmit} className=" d-flex flex-column shadow border col-12 col-md-8 col-lg-4 gap-3 p-2 bg-white">
                <input ref={regemail}  type="email" placeholder="Enter your email" className=" col-12 form-control" />
                <input ref={regpass} type="password" placeholder="Enter your password" className=" col-12 form-control" />
                <button className="btn btn-primary">Regist</button>
            </form>
        </div>

    )
}