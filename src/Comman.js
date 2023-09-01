import React from 'react'
import img from "../src/images/z1.jpg"
import { NavLink } from 'react-router-dom';
const Comman = (props) => {
  return (
    <div>
       <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}<br/>
                    <strong className="brand-name"> Ajmera Education</strong>
                  </h1>
                  <h2 className="my-3">
                    Social media marketing is the use of social media platforms and websites to promote a product or service. Although the terms e-marketing and digital marketing are still dominant in academia, social media marketing is becoming more popular for both practitioners and researchers. Wikipedia
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgname} className="img-fluid animated" alt="home img"></img>

                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Comman
