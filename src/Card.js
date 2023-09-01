import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


const Card = (props) => {
  return (
    <>
    <div className='col-md-4 col-10 mx-auto'>
      <div className='card'>
        <img src={props.imgsrc} className='card-img-top' alt='img'/>
    <div className='card-body'>
      <h4 className='card-title font-weight-bold'>{props.title}</h4>
      <p className='card-text'>
      A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors,
      </p>
      <NavLink to="/" className="btn btn-primary">
      Go somewhere
      </NavLink>
    </div>
      </div>

    </div>
    </>
  )
}

export default Card
