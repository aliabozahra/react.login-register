import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./Pages/Login";
import Profielpage from "./Pages/Profiel";
import Registerpage from "./Pages/Regieter";

export default function App (){
  return(
    <div className="App col-12  d-flex justify-content-center align-items-center">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> <Profielpage/></h1>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="/register" element={<Registerpage/>}></Route>
        <Route path="*" element={<h1>404 page</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}