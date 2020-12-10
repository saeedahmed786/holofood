import React, { useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { listProducts } from '../Redux/store';
import '../index.css';
import iphone from '../images/iphone.jpg';
import Deals from './getDeals';
import { motion } from "framer-motion";
import ScrollToTop from 'react-scroll-up';

 const Slideshow = () => (
    <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
  )
 function Home() {
    
    const productsList = useSelector(state => state.productsList);
    const { products, error, loading } = productsList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        window.scrollTo(0, 0);
        return () => {
            
        }
    }, [])

    

   
    

  
    return (
        
            loading ? <div>loading...</div> : error? <div>{error}</div> 
            :
            <>
           
    <div>
       <Slideshow/>
        <div className="header-blue">

            <div className="container hero text-white">
        
                <div className="row">
                            
                    <motion.div initial = {{opacity: 0}} animate = {{opacity: 1}} transition= {{duration: 6}} className="col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0" style = {{paddingTop: '100px'}}>
                     
                        <h1 id = 'top' className = '  mb-3 mt-5' style = {{fontSize: '30px', display: 'block'}}>The revolution is here.</h1>
                        <p className = 'font-weight-light' style = {{display: 'block'}}>There’s nothing cutout about ‘Holo Food’ . Not our pizzas. Not our kin and our sandwiches. We have in excess of 16,000 eateries and 350,000 colleagues in excess of 100 nations. With 55 years of experience, We make food we’re pleased to serve and convey it fast, with a grin.</p>
                        <Link to = '/about' className=" text-white btn btn-outline-info btn-lg action-button" type="button">Read More</Link>
                    </motion.div>
                    <div className="col-lg-5 col-lg-offset-0 col-md-5 col-md-offset-1 d-none d-lg-block d-md-block phone-holder ml-5">
                        <motion.div initial = {{x: '100vw'}} animate = {{x: 0}} transition= {{duration: 6}} className="iphone-mockup">
                        <img src={iphone} alt = 'restaurant' className="device img-fluid" style = {{ height: '400px', marginTop: '60px', marginLeft: '80px'}}/>
                            <div className="screen"></div>
                        </motion.div>
                    </div>
                   
                </div>
               
            </div>
        </div>
    </div>




   <div className = 'bg-light'>
    <div className = 'container'>
    <Deals/>
    </div>
    </div>
     
    <ScrollToTop showUnder={160}>
  <span><i className="fas fa-arrow-circle-up fa-2x text-info"></i></span>
</ScrollToTop>

<div>
<div className = 'container pt-5' style = {{backgroundColor: 'whitesmoke'}}>
  <div className = 'row  ml-2'>
     {
         products.map(product => {
             return(
                 <>
             <motion.div whileHover = {{scale : 1.3}} transition = {{type: 'spring', stiffness: 300}} className = 'containers col-md-6 col-lg-4 col-xl-3 col-sm-6 py-5' key = {product._id}>
                <div className = 'card' style = {{height: '90%', width: '90%'}} key = {product._id}>
                <img src={product.pic} alt="Avatar" className="image"/>
                <div className = 'card-body'>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <p>{product.rating} Stars</p>
                            </div>
                <div className="overlay">
                    <div className="text-center mb-4">
                    <Link to = {'/product/' + product._id} className = 'btn btn-outline-info'>Order Now</Link>

                    </div>
                </div>
                </div>
                </motion.div>
                 </>
         

             );
         })
     }
  </div>
  
  
  
    
</div>
</div>
</>
        
        
        
    )
}


export default Home;
