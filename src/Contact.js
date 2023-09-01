import React from 'react'
import { useState } from 'react'



const Contact = () => {
  const [data, setData] =useState({
    firstname:"",
    lastname:"",
    email:"",
city:"",
zip:"",
  });
const InputEvent =(event)=>{
  const {name, value} =event.target;

  setData((preVal)=>{
    return{
      ...preVal,
      [name]:value,
    };
  });
};
const formSubmit = (e) =>{
e.preventDefault();
alert(
  `${data.firstname}
  ${data.lastname}
  ${data.email}
  ${data.city}
  ${data.zip}`
  );
}
  return (
    <>
    <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
    <form onSubmit={formSubmit} class="row g-3 needs-validation border border-5 m-5" novalidate>
      <h1>Form</h1>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">First name</label>
    <input 
    type="text" 
    class="form-control" 
    id="validationTooltip01" 
    name="firstname"
    value={data.firstname}
    onChange={InputEvent}
    required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Last name</label>
    <input 
    type="text" 
    class="form-control" 
    id="validationTooltip02"
    name="lastname"
    value={data.lastname}
    onChange={InputEvent} 
    required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">email</label>
    <div class="input-group has-validation">
    <input 
      type="text" 
      class="form-control" 
      id="validationTooltipUsername" 
      aria-describedby="validationTooltipUsernamePrepend" 
      name="username"
    value={data.username}
    onChange={InputEvent}
      required/>
      <span class="input-group-text" 
      id="validationTooltipUsernamePrepend">
        @</span>
      <input 
      type="text" 
      class="form-control" 
      id="validationTooltipUsername" 
      aria-describedby="validationTooltipUsernamePrepend" 
      name="email"
    value={data.email}
    onChange={InputEvent}
      required/>
      <div class="invalid-tooltip">
        Please choose a unique and valid username.
      </div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input 
    type="text" 
    class="form-control" 
    id="validationTooltip03" 
    name="city"
    value={data.city}
    onChange={InputEvent}
    required/>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-tooltip">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input 
    type="text" 
    class="form-control" 
    id="validationTooltip05" 
    name="zip"
    value={data.zip}
    onChange={InputEvent}
    required/>
    <div class="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
</div>
</div>
</>
  )
}

export default Contact
