import React from 'react';
import '../index.css';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from './auth';
import logo  from '../images/logo.png';
import { motion } from 'framer-motion';

 function Navbar(props) {
   
   
   
    return (

        <>
        
        <nav className="navbar navbar-expand-lg h-25">
                        <motion.div
                        initial = {{x:-300, opacity: 0.2}} 
                        animate = {{x: 0, opacity: 1, y: 8}} 
                        transition = {{duration: 3}}
                       
                        className="navbar-brand pl-3"
                        > <Link to="/" style = {{color: 'white', textDecoration: 'none'}}><img src = {logo} alt = 'logo' 
                        style = {{width: '100px'}}   /> 
                        HOLO FOOD
                        </Link>
                        </motion.div>
                        <button className="navbar-toggler text-light" style = {{color: 'white'}} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fas fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarNav" style = {{color: 'white'}}>
                    <motion.ul initial = {{x:-300, opacity: 0.2}} animate = {{x: 0, opacity: 1}} transition = {{duration: 2, type : 'spring', stiffness: 10}} className="navbar-nav mr-auto text-center pt-3 text-light" style = {{fontSize: '15px', paddingLeft: '60px', textDecoration: 'none'}}>
                            <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="nav-link" to="/" ><i class="fas fa-home"></i><br/>Home</Link>
                    </li>
                   

                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className=" nav-link" to = '/categoriesproducts'>
                        <i class="fas fa-store-alt"></i><br/>Categories
                        </Link>
                        
                        </li>

                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="nav-link" to="/cart/:id"><i class="fas fa-shopping-cart"></i><br/>Cart</Link>
                    </li>
                   
                 
                    
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="nav-link" to="#"><i class="fas fa-address-card"></i><br/>About</Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="nav-link" to="#"><i class="fas fa-phone"></i><br/>Contact</Link>
                    </li>
                    

                   

                    {
                        isAuthenticated() && isAuthenticated().role === 1 && (
                            <>
                       
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="nav-link" to="/products"><i class="fas fa-user-shield"></i><br/>Admin Panel <br/>For Only Saeed</Link>
                    </li>
                    
                    
                   

                            </>
                        )
                    }

                    {
                        !isAuthenticated() && (
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                             <Link className="nav-link" style = {{color: 'lightgrey'}} to="/signin"><i className="fas fa-sign-in-alt"></i><br/>Login
                             </Link>
                      
                       
                         </li>

                        )
                    }
                    {
                        isAuthenticated() || isAuthenticated().role === 1 ? (
                            <li className="nav-item candidname" data-toggle="collapse" data-target=".navbar-collapse.show">
                             <Link className="" to="/profile" style = {{color: 'lightgrey'}}>
                             <i class="fas fa-user-tie"></i><br/>{ isAuthenticated().name}
                             </Link> 
                            </li>
                             )

                             : null
                      
                       
                    

                       
                    }

                    {
                        isAuthenticated() && (
                            
                            <li className="nav-item pl-lg-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                               <Link className=" logout" style = {{textDecoration: 'none'}}  onClick = {
                                    (e) => {
                                        logout(() => {
                                        props.history.push('/signin');
                                    })
                                    
                              }}> <i className="fas fa-sign-in-alt"></i><br/>Logout</Link>
                            </li>

                        )
                    }

                         </motion.ul>
                        </div>
                        </nav>
       

                
        </>
    )
}

export default withRouter(Navbar);