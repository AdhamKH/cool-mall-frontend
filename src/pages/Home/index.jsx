import React from "react";
import "./index.css";
import image_logo from "../photos/cool.jpg";
import Signup from "../signup";
import {BrowserRouter, Link} from "react-router-dom";
import Navbar from "../../components/shared/Navbar/navbar"
function Home() {
  return (<div>
    <Navbar></Navbar>
  </div>
  );
}
export default Home;
