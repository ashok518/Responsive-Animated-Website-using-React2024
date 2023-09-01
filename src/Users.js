import React from "react";
import Comman from "./Comman";
import img from "../src/images/b1.jpg"

function Users() {
    return (
      <>
      <Comman
       name="users page"
       imgname={img}
       visit="/home"
      btn="Get Start"
      />
      </>
    )
  }
  export default Users