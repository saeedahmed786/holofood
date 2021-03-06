import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { showErrormsg } from './messages';
import { motion } from 'framer-motion';


 const CategoryProducts = (props) =>  {
    const [categories, setCategories] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [products, setProducts] = useState([]);
  

    
  

        useEffect(() => {
            loadCategories();
            window.scrollTo(0, 0);
           
            return () => {
                
            }
        }, [])
     
  
        const getCategories = async () => {
            const response =  await Axios.get('/api/products/categories');
            return response;
         }
      
      
        const loadCategories = async () => {
           await getCategories()
           .then( response => {
               
               setCategories(response.data.categories);
              
      
           }).catch(err => {
               setErrorMsg(err.response.data.err);
           })
        }  

        const catHandler = async (catId) => {
            const response = await Axios.get('/api/products/categories/filter/' + catId);
            setProducts(response.data);
            return response;
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
        <>
        <motion.div variants = {framervariant} initial = "hidden" animate= "visible" className = 'container-fluid'>
        <div className = 'row'>
            <div className = 'col-md-3 col-lg-3 border' style = {{background: 'radial-gradient( circle at top right, #16222A, #3A6073)', borderRadius: '0',
            boxShadow:' none',
            border: 'none'}}>

           
      

         {
             categories && categories.map( response => {
                return (
                 <ul key = {response._id}>
                     <Link   onClick = { () =>  catHandler(response._id)} className = 'active' style = {{textDecoration: 'none', color: 'white'}}>                        
                     {response.category}
                     </Link>
                 </ul>
                 )
             })
         }
         {
             errorMsg && showErrormsg(errorMsg)
         }
        
         </div>

        <div className = 'col-md-9 col-lg-9'>
        <div>
        <div className = 'row ml-2'>

         {products.map( product => {
             return(
                <>
                <motion.div whileHover = {{scale : 1.3}} transition = {{type: 'spring', stiffness: 300}} className = 'containers col-md-6 col-lg-4 col-sm-12 py-5 pl-3' key = {product._id}>
                <div className = 'card h-100' style = {{width: '85%'}}>
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
             )
         })
         }

         </div>
         </div>
        </div>
        </div>
        </motion.div>

        
       


     
     </>
        
         
          
            
    
    )

}

export default CategoryProducts;
