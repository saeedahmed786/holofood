import React, { useEffect, useState} from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { motion } from 'framer-motion';
import { dealAddToCart } from '../Redux/store';
import { Link } from 'react-router-dom';

  const Deal = (props) => {

    const dispatch = useDispatch('')
     const dealId = props.match.params.id
     const [ qty, setQty] = useState(1);
     const [deal, setDeal] = useState('');
     useEffect(() => {
         getDeal(dealId)
         if(dealId) {
        dispatch(dealAddToCart(dealId, qty));
         }

       return () => {
         
       }
     }, [])
     

     const getDeal = async (dealId) => {
         const response = await Axios.get('/api/products/deal/' + dealId);
         setDeal(response.data.deal);
         return response;
             }

    const handleAddToCart = () => {
              props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
            }
    const handleCart = () => {
             props.history.push('/');
       
            }
  
  const dealHandler = () => {       
   
        return ( 
            <>         
           <div className = 'pl-3 mt-5'>
             <h1 className = 'text-center mb-5'>
                 Amazing Deal with special Discount
             </h1>
        
           <div className = 'row'>
           <div className = 'col-md-6 col-lg-6 pl-2'>
           <img src = {deal.pic} alt = {deal.name} style = {{ width: '100%', height: '500px'}}></img>

                </div>

                   <div className = 'col-md-6 col-lg-6 pl-5 pb-4' style = {{paddingTop: '80px'}}>
                     <h3>{deal.name}</h3>
                     <h5>{deal.description}</h5>
                     <h6>
                     <br/>
                     
                    <span> <del>${deal.priceBefore} </del> </span>  &nbsp; <span>{deal.off}% Off</span>
                               
                    </h6>
                     <h6 className = 'pb-4'  style = {{borderBottom: '1px solid black'}}>
                     
                              ${deal.price}
                                    
                     </h6>
                     <p>Qty: &nbsp;
                    <select value = {qty} onChange = { (e) => { setQty(e.target.value)}} className = 'mt-5'>
                    { [ ...Array(deal.countInStock).keys()].map( x=> 
                     
                     <option value = { x + 1 }> {x + 1}</option>

                    )}
                    
                    </select>
                    </p>
                      { deal.countInStock > 0 && <button type = 'button' data-toggle="modal" data-target="#exampleModalLong"
                       className = ' border w-50 btn btn-light btn-lg'>
                      Add to Cart</button>} <br/> <br/>
                     Share: &nbsp; &nbsp;
                     <Link to = 'https://web.facebook.com/'><i className="fab fa-facebook text-muted"></i> </Link>
                     <Link to = 'https://web.twitter.com'><i className="fab fa-twitter text-muted pl-4"></i> </Link>
                     <Link to = 'https://web.instagram.com'><i className="fab fa-instagram text-muted pl-4"></i> </Link>
                  
                   </div>

            
                  
                 
              
           </div>

            
            
        </div>
        
     </>
           
            
          
        )
                    }


        const dealModal = () => {
          return (
            <div className = 'modal fade' id = 'exampleModalLong' tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
           <div className="modal-content">
             <div className="modal-header bg-dark text-white">
               <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
               <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body alert-success">
              <p><i className="fas fa-check-circle bg-sucess"></i> Deal added to cart successfully!</p>
             </div>
             <div className="modal-footer">
               <button onClick = {handleCart} type="button" className="btn btn-secondary" data-dismiss = 'modal'><i className="fas fa-arrow-circle-left"></i> Continue Shopping</button>
               <button  onClick = {handleAddToCart} data-dismiss = 'modal'  type="button" className="btn btn-info">Go to Cart &nbsp; <i className="fas fa-arrow-circle-right bg-info"></i></button>
             </div>
           </div>
       </div>
       </div>
          )
        }

      return (
        <>
        {dealHandler()}
        {dealModal()}
        </>
      )

  }
    

export default Deal;