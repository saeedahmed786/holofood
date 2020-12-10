import React, { useEffect, useState} from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { savePayment } from '../Redux/store';
import CheckoutSteps from './CheckoutSteps';
import { motion } from 'framer-motion';

  const Payment = (props) => {
    const [paymentMethod, setPaymentMethod] = useState('');
   
    
     const dispatch = useDispatch();

     useEffect(() => {
      window.scrollTo(0, 0);
       return () => {
         
       }
     }, [])
   


    


     const submitHandler = (e) => {
         e.preventDefault();
         dispatch(savePayment({paymentMethod}));
         props.history.push('/placeorder');
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
          duration: 2,
          type: 'spring'
           
         }
      },

    }

     
   
  
         
   
        return ( 

             
             <div> <CheckoutSteps step1 step2 step3 ></CheckoutSteps>

             <motion.div variants = {framervariant} initial = "hidden" animate= "visible" className = 'container text-center signin-form pt-4 pb-4'>
                <form onSubmit = {submitHandler}>
                
                    <h2 className = 'font-weight-bolder pb-2'>Payments</h2><br/>
                  
                    
                    
                    <input type = 'radio' className = 'w-25' id = 'paymentMethod' value = 'Paypal' name ='paymentMethod' required onChange = { (e) => setPaymentMethod(e.target.value)}></input><br/><br/>
                    <label htmlFor = 'paymentMethod' className = 'font-weight-bolder h1'>Paypal</label> <br/>
                    
                    <div>
                    <button type= 'submit' className = 'btn mt-4 w-50' style = {{ background: 'radial-gradient( circle at top right, #16222A, #3A6073)', color: 'whitesmoke'}} >Continue</button>
                    </div>
                   
                    
                 
                   
                   

                </form>
            </motion.div>

             
             </div>

            
          
           
          
        )

  }
    

export default Payment;