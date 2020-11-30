import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { showErrormsg, showSuccessmsg } from './messages';


export default function EditProduct(props) {

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
        price: '',
        countInStock: '',
        productCategory: ''
       
       
    });
    
    const{ name, file, price, countInStock, description, productCategory} = product;

    const getProduct = async () => {
        const response = await Axios.get('/api/products/' + productId);
        setProduct(response.data);

        return response;
    }


  
    useEffect(() => {
        loadCategories();
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
   
    
    const handleEditCategoryChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
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
                const response = Axios.put(`/api/products/${productId}`, {
                    name, 
                    price, 
                    pics: imageurl,  
                    countInStock,
                     description,
                      productCategory
                    
            
                }, { headers: {
                    'Authorization' : 'Bearer ' +  token
                }});
                return response;
                }
    
    /********************************************* Load Categories ***********************************************
      * ****************************************************************************************
      * *********************************vv******************************************************************/

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
                        <label htmlFor = 'price' className = 'font-weight-bolder'>Price:</label> <br/>
                        <input type = 'text' id = 'price'  name ='price' value ={product.price} onChange = {handleEditProductChange}></input><br/><br/>
                    </div>
                    <div>
                        <label htmlFor = 'countInStock' className = 'font-weight-bolder'>countInStock:</label> <br/>
                        <input type = 'text' id = 'countInStock' value ={product.countInStock}  name ='countInStock' onChange = { handleEditProductChange}></input><br/><br/>
                    </div>

            
                    <br/>
                  
                    <div>
                <label>Categories</label> <br/>
                <select name = 'productCategory'  className = 'custom-select w-50 mr-sm-2' onChange = {handleEditCategoryChange}>
                    <option value = ''>Choose one</option>
                   
                       {
                        categories && categories.map( c => 
                       {
                          return (
                       
                              <option key = {c._id} value = {c._id}>
                                {c.category}
                            </option>
                           
                           )
                        })
                       }
                       </select>
                       
                        
                    
                    

                   
                </div>
                    <br/>
                   
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

