import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom/cjs/react-router-dom.min';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import Home from './Home';
import Services from './Services';
function App() {
  return (
    <>
      <Router>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                  <NavLink activeclassName="menu_active" className="navbar-brand" to="/">Ajmera
                  </NavLink>
                  <button className='navbar-toggler' type='button'
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                  </button>
                  <div className='collapse navbar-collapse' id="navbarNavAltMarkup">
                    <div className='navbar-nav m-lg-auto '>
                      <NavLink className="nav-link active"
                        aria-current="page"
                        to="/">Home</NavLink>
                      <NavLink className="nav-link" to="/about">About</NavLink>
                      <NavLink className="nav-link" to="/contact">Contact</NavLink>
                      <NavLink className="nav-link" to="/services">Services</NavLink>
                      <NavLink className="nav-link" to="/users">Users</NavLink>


                    </div>

                  </div>
                </div>

              </nav>
<Switch>
  <Route path="/about"><About/> </Route>
  <Route path="/contact"><Contact/> </Route>
  <Route path="/services"><Services/> </Route>
  <Route path="/users"><Users/> </Route>
  <Route path="/"><Home/> </Route>
</Switch>
            </div>

          </div>

        </div>
      </Router>
    </>
  )
}

export default App
