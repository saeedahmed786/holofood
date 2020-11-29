import Axios from 'axios';
import cookie  from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { showErrormsg, showSuccessmsg } from './messages';

export default function EditProduct(props) {
    const productId = props.match.params.id;
    const [token, setToken] = useState('');
    const [image, setImage] = useState('');
    const [categories, setCategories] = useState(null);
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

    const handleImageChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.files[0]
        })
    }
   
    
    const handleCategoryChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleProductChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const updateProduct = () => {
    const response = Axios.put(`/api/products/${productId}`, {
        name, 
        price, 
        image,  
        countInStock,
         description,
          productCategory
        

    }, { headers: {
        'Authorization' : 'Bearer ' +  token
    }});
    return response;
    }

   

    const submitHandler = (e) => {
        e.preventDefault();
            let formData = new FormData();
            formData.append('upload_preset', 'foodie');
            formData.append('file', file);
            formData.append('cloud_name', 'saeedahmed');
            fetch('https://api.cloudinary.com/v1_1/saeedahmed/image/upload', {
                method: 'post',
                body: formData
            }).then(res => res.json())
            .then(datam => {
                setImage(datam.secure_url);

            }).catch(err => {
                console.log(err);
            })
         
            

            updateProduct().then( response => {
                setSuccessMsg('Product updated successfully')
           
             });
             props.history.push('/products')
    
    

       
    }

                        /* ****************************
            *********************** Token**************************
            ******************************************************************/

            const getToken = () => {
                setToken(localStorage.getItem('token'))
            }
            console.log(token);
    
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
                    <input type="file" className="form-control-file"   name = 'file' className = 'w-50' id="image" onChange = {handleImageChange}/>
                </div>
                    <div>
                        <label htmlFor = 'name' className = 'font-weight-bolder'>Name:</label> <br/>
                        <input type = 'text' id = 'name'  name ='name' value ={product.name} onChange = {handleProductChange}></input><br/><br/>
                    </div>
                    
                    <br/>
                    <div>
                        <label htmlFor = 'price' className = 'font-weight-bolder'>Price:</label> <br/>
                        <input type = 'text' id = 'price'  name ='price' value ={product.price} onChange = {handleProductChange}></input><br/><br/>
                    </div>
                    <div>
                        <label htmlFor = 'countInStock' className = 'font-weight-bolder'>countInStock:</label> <br/>
                        <input type = 'text' id = 'countInStock' value ={product.countInStock}  name ='countInStock' onChange = { handleProductChange}></input><br/><br/>
                    </div>

            
                    <br/>
                  
                    <div>
                <label>Categories</label> <br/>
                <select name = 'productCategory'  className = 'custom-select w-50 mr-sm-2' onChange = {handleCategoryChange}>
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
                        <textarea className= 'w-50' value ={product.description} type = 'text' id = 'description'  name ='description' onChange = { handleProductChange}></textarea><br/><br/>
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
