import React, { useEffect, useState} from 'react';
import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart, dealAddToCart, DetailsProducts } from '../Redux/store';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

  const Product = (props) => {
    const productId = props.match.params.id;
     const [ qty, setQty] = useState(1);
     const productDetails = useSelector(state => state.productDetails);
     const { product, error, loading } = productDetails;
     const dispatch = useDispatch();

     useEffect(() => {
       dispatch(DetailsProducts(props.match.params.id)); 
       if(productId) {
        dispatch(AddToCart(productId, qty));
        dispatch(dealAddToCart(productId, qty));
        
    }
       return () => {
         
       }
     }, [])
     
     const handleAddToCart = () => {
       props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
     }
     const handleCart = () => {
      props.history.push('/');

     }
     const framervariant =  {
       hidden : {
         opacity: 0,
         x: '100vw'

       },
       visible : {
         opacity: 1,
         x: 0,
         transition: {
           type: 'spring',
           duration: 2
            
          }
       }

     }

    
  
         
   const cartAdditionComponent = () => {
        return ( 
          
           loading? <div>loading...</div>: error? <div>{error}</div>:
         
           <motion.div variants = {framervariant} initial = "hidden" animate= "visible" className = 'pl-3 mt-5'>

        
           <div className = 'row'>
           <div className = 'col-md-6 col-lg-6'>
           <img src = {product.pic} alt = {product.name} style = {{ width: '100%', height: '500px'}}></img>

                </div>

                   <div className = 'col-md-6 col-lg-6 pl-5 pb-4' style = {{paddingTop: '80px'}}>
                     <h3>{product.name}</h3>
                     <h6 className = 'pb-4'  style = {{borderBottom: '1px solid black'}}>
                     
                              ${product.price}
                                        
                     </h6>
                     <p>Qty: &nbsp;
                    <select value = {qty} onChange = { (e) => { setQty(e.target.value)}} className = 'mt-5'>
                    { [ ...Array(product.countInStock).keys()].map( x=> 
                     
                     <option value = { x + 1 }> {x + 1}</option>

                    )}
                    
                    </select>
                    </p>
                      { product.countInStock > 0 && <button type="button"  data-toggle="modal" data-target="#exampleModalLong"
                     className = ' border w-50 btn btn-lg' style = {{background: 'radial-gradient( circle at top right, #16222A, #3A6073)', color: 'whitesmoke'}} >
                      Add to Cart</button>
                    }
                  
                    <br/><br/>
                     
                     Share: &nbsp; &nbsp;
                     <Link to = 'https://web.facebook.com/'><i className="fab fa-facebook text-muted"></i> </Link>
                     <Link to = 'https://web.twitter.com'><i className="fab fa-twitter text-muted pl-4"></i> </Link>
                     <Link to = 'https://web.instagram.com'><i className="fab fa-instagram text-muted pl-4"></i> </Link>

                   </div>

                   <div className = 'col-md-12 col-lg-12 text-center mt-5'>
                       <h3 className = 'pb-5'>Description</h3>
                       <img src = {product.pic} alt = {product.name} className = 'w-75 zoom'></img>
                   </div>

                   <div className = 'col-md-12 col-lg-12 justify-text-center px-5'>
                       <p className = 'pt-4 text-muted pb-5'>{product.description}</p>
                   </div>

                  
                 
              
           </div>

            
            
        </motion.div>
           
            
          
        );
                  }

            const showCartNotification = () => {
                    return (
                      <div className = 'modal fade' id = 'exampleModalLong' tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header bg-dark text-white">
                      <h5 className="modal-title" id="exampleModalLabel">Holo Food</h5>
                      <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body alert-success">
                     <p className = ''><i className="fas fa-check-circle bg-sucess"></i> Product added to cart successfully!</p>
                    </div>
                    <div className="modal-footer">
                      <button onClick = {handleCart} type="button" className="btn btn-secondary" data-dismiss = 'modal'><i className="fas fa-arrow-circle-left"></i> Continue Shopping</button>
                      <button  onClick = {handleAddToCart} data-dismiss = 'modal'  type="button" className="btn btn-info"> Go to Cart &nbsp; <i className="fas fa-arrow-circle-right bg-info"></i></button>
                    </div>
                  </div>
              </div>
              </div>
                    )
                  }
              
              

    return (
       <>
     { cartAdditionComponent()}
     { showCartNotification()}

      </>
    )



  }
    

export default Product;