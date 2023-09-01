import React from "react";
import Comman from "./Comman";
import img from "../src/images/a1.jpg"


function About() {
    return(
      <>
      <Comman 
       name="About page"
     imgname={img}
     visit="/contact"
    btn="Get Start"
      />
      </>
    )
     
  }
export default About  