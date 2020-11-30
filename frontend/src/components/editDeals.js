// import Axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { showErrormsg, showSuccessmsg } from './messages';


// export default function EditDeal(props) {

//     const dealId = props.match.params.id;
//     const [token, setToken] = useState('');
//     const [indDeal, setIndDeal] = useState('');
//     const [successMsg, setSuccessMsg] = useState('');
//     const [errorMsg, setErrorMsg] = useState('');
//     const [productData, setProductData] = useState({
//         name: '',
//         file: '',
//         description: '',
//         priceBefore: '',
//         price: '',
//         off: '',
//         countInStock: '',
       
       
//     });
//     const{ name, file, priceBefore, price, off, countInStock, description} = productData;

//     const getDeal = async () => {
//         const response = await Axios.get('/api/products/deal/' + dealId);
//         setIndDeal(response.data.deal);
       
//         return response;
//     }
//     console.log(indDeal.name)



  
//     useEffect(() => {
//         getDeal();
//         getToken();
    
//         return () => {
           

            
//         }
//     }, []);
//     const handleEditImageChange = (e) => {
//         setProductData({
//             ...productData,
//             [e.target.name] : e.target.files[0]
//         });

//     }
   
    

//     const handleEditProductChange = (e) => {
//         setProductData({
//             ...productData,
//             [e.target.name] : e.target.value
//         })
//     }

             
                    
//                 // }

//     const submitHandler = (e) => {
//         e.preventDefault(); 
//         let formData = new FormData();
//         formData.append("upload_preset", "foodie");
//         formData.append('file', file);
//         formData.append('cloud_name', 'saeedahmed');
//          Axios.post('https://api.cloudinary.com/v1_1/saeedahmed/image/upload', formData)
//          .then(data => {
//              updateDeal(data.data.secure_url);
//          }).catch(err => {
//                 console.log(err);
//             })
           
           
//              props.history.push('/deals');

           
    
    

       
//     }

    


 

//                         /* ****************************
//             *********************** Token**************************
//             ******************************************************************/

//             const getToken = () => {
//                 setToken(localStorage.getItem('token'))
//             }

//             const updateDeal = async (imageUrl) => {
//                 const response = await Axios.post(`/api/products/deals${dealId}`, {
//                  name, 
//                  pic: imageUrl, 
//                  priceBefore, 
//                  price,
//                   off, 
//                   countInStock, 
//                   description
//                 }, {headers : {
//                     'Authorization': 'Bearer ' +  token
//                 }});
//                 return response;
//             }
    
//     /********************************************* Load Deals ***********************************************
//       * ****************************************************************************************
//       * *********************************vv******************************************************************/

    






//     return (
//         <div>
//         <div className = 'container text-center signin-form mt-4 pb-4 w-75 border border-dark'>
//         <div className = 'bg-info'>
//          <h1>
//            Edit deal
//            </h1>
//            </div>
//                 <form onSubmit = {submitHandler}>
//                     {
//                         errorMsg && showErrormsg(errorMsg)
//                     }

//                     {
//                         successMsg && showSuccessmsg(successMsg)
//                     }
                   

//                     <div className="form-group">
//                     <label for="image">Image</label><br/>
//                     <input type="file" className="form-control-file" name = 'file' className = 'w-50' id="image" onChange = {handleEditImageChange}/>
//                 </div>
//                     <div>
//                         <label htmlFor = 'name' className = 'font-weight-bolder'>Name:</label> <br/>
//                         <input type = 'text' id = 'name'  name ='name' value ={indDeal.name} onChange = {handleEditProductChange}></input><br/><br/>
//                     </div>
                    
//                     <br/>
//                     <div>
//                         <label htmlFor = 'price' className = 'font-weight-bolder'>Price:</label> <br/>
//                         <input type = 'text' id = 'price'  name ='price' value ={indDeal.price} onChange = {handleEditProductChange}></input><br/><br/>
//                     </div>
//                     <div>
//                         <label htmlFor = 'countInStock' className = 'font-weight-bolder'>countInStock:</label> <br/>
//                         <input type = 'text' id = 'countInStock' value ={indDeal.countInStock}  name ='countInStock' onChange = { handleEditProductChange}></input><br/><br/>
//                     </div>

            
//                     <br/>
                  
                 
//                     <br/>
                   
//                     <div>
//                         <label htmlFor = 'description' className = 'font-weight-bolder'>Description:</label> <br/>
//                         <textarea className= 'w-50' value ={indDeal.description} type = 'text' id = 'description'  name ='description' onChange = { handleEditProductChange}></textarea><br/><br/>
//                     </div>
//                     <br/>
//                     <br/>

                   
               

//                     <div>
//                     <button type= 'submit' className = 'btn btn-outline-dark w-50'>Update</button> <br/> <br/>
//                     </div>
                  
//                 </form>
//             </div>
            
//         </div>
        
     
//     )
                
// }

import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { showErrormsg, showSuccessmsg } from './messages';


export default function EditDeal(props) {

    const productId = props.match.params.id;
    const [token, setToken] = useState('');
    const [submit, setSubmit] = useState(false);
    const [categories, setCategories] = useState(null);
    const [image, setimage] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [product, setProduct] = useState({
        name: '',
        file: '',
        description: '',
        priceBefore: '',
        price: '',
        off: '',
        id: '',
        countInStock: '',
       
       
    });
    
    const{name, file, priceBefore, price, off, countInStock, description, id} = product;

    const getProduct = async () => {
        const response = await Axios.get('/api/products/deal/' + productId);
        setProduct(response.data.deal);
        console.log(response.data.deal);

        return response;
    }


  
    useEffect(() => {
        getProduct();
        getToken();
    
        return () => {
           

            
        }
    }, []);
    const handleEditImageChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.files[0]
        });

    }
   
    
 

    const handleEditProductChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        });
    }

             
                    
                // }

    const submitHandler = (e) => {
        e.preventDefault(); 
        setSubmit(true);     
        let formData = new FormData();
        formData.append("upload_preset", "foodie");
        formData.append('file', file);
        formData.append('cloud_name', 'saeedahmed');
         Axios.post('https://api.cloudinary.com/v1_1/saeedahmed/image/upload', formData)
         .then(data => {
             updateProduct(data.data.secure_url);
         }).catch(err => {
                console.log(err);
            })
           
           
             props.history.push('/products');

           
    
    

       
    }

    


 

                        /* ****************************
            *********************** Token**************************
            ******************************************************************/

            const getToken = () => {
                setToken(localStorage.getItem('token'))
            }

            const updateProduct = (imageurl) => {
                const response = Axios.put(`/api/products/deals/${productId}`, {
                    name, 
                    pic: imageurl, 
                    priceBefore, 
                    price,
                     off, 
                     countInStock, 
                     description
                    
            
                }, { headers: {
                    'Authorization' : 'Bearer ' +  token
                }});
                return response;
                }
    
    /********************************************* Load Categories ***********************************************
      * ****************************************************************************************
      * *********************************vv******************************************************************/




    return (
        <div>
        <div className = 'container text-center signin-form mt-4 pb-4 w-75 border border-dark'>
        <div className = 'bg-info'>
         <h1>
           Edit Product
           </h1>
           </div>
                <form onSubmit = {submitHandler}>
                    {
                        errorMsg && showErrormsg(errorMsg)
                    }

                    {
                        successMsg && showSuccessmsg(successMsg)
                    }
                    <div className="form-group">
                    <label for="image">Image</label><br/>
                    <input type="file" className="form-control-file" name = 'file' className = 'w-50' id="image" onChange = {handleEditImageChange}/>
                </div>
                    <div>
                        <label htmlFor = 'name' className = 'font-weight-bolder'>Name:</label> <br/>
                        <input type = 'text' id = 'name'  name ='name' value ={product.name} onChange = {handleEditProductChange}></input><br/><br/>
                    </div>
                    
                    <br/>
                    <div>
                        <label htmlFor = 'countInStock' className = 'font-weight-bolder'>countInStock:</label> <br/>
                        <input type = 'text' id = 'countInStock' value ={product.countInStock}  name ='countInStock' onChange = { handleEditProductChange}></input><br/><br/>
                    </div>


            
                    <br/>
                    <div>
                    <label htmlFor = 'priceBefore' className = 'font-weight-bolder'>Price Before:</label> <br/>
                    <input type = 'text' id = 'priceBefore'  name ='priceBefore' value ={priceBefore} onChange = {handleEditProductChange}></input><br/><br/>
                </div>
                <div>
                    <label htmlFor = 'price' className = 'font-weight-bolder'>Price Now:</label> <br/>
                    <input type = 'text' id = 'price'  name ='price' value ={price} onChange = {handleEditProductChange}></input><br/><br/>
                </div>
                <div>
                    <label htmlFor = 'off' className = 'font-weight-bolder'>Off (in %):</label> <br/>
                    <input type = 'text' id = 'off'  name ='off' value ={off} onChange = {handleEditProductChange}></input><br/><br/>
                </div>
                <div>
                    <label htmlFor = 'countInStock' className = 'font-weight-bolder'>Count In Stock:</label> <br/>
                    <input type = 'text' id = 'countInStock' value ={countInStock}  name ='countInStock' onChange = {handleEditProductChange}></input><br/><br/>
                </div>

                   
              
                  
                   
                    <div>
                        <label htmlFor = 'description' className = 'font-weight-bolder'>Description:</label> <br/>
                        <textarea className= 'w-50' value ={product.description} type = 'text' id = 'description'  name ='description' onChange = { handleEditProductChange}></textarea><br/><br/>
                    </div>
                    <br/>
                    <br/>

                    <div>
                    <button type= 'submit' className = 'btn btn-outline-dark w-50'>Update</button> <br/> <br/>
                    </div>
                  

                </form>
            </div>
            
        </div>
    )
}



