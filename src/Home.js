import React from "react";
import img from "../src/images/z1.jpg"
import { NavLink } from "react-router-dom";
import Comman from "./Comman";

function Home() {
  return (
    <>
     <Comman
     name="Social Media Marketing "
     imgname={img}
     visit="/about"
    btn="Get Start"
     />
    </>
  )
}

export default Home