import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { showErrormsg, showSuccessmsg } from './messages';


 const Contact = () =>  {
     const [successMsg, setSuccessMsg] = useState('');
     const [errorMsg, setErrorMsg] = useState('');


    const [cData, setCData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
       

    });

    const { name, email, subject, message } = cData;


const handleContactChange = (e) => {
    setCData({
        ...cData,
        [e.target.name] : e.target.value
    });
    setErrorMsg('');
    setSuccessMsg('');

}
   
const handleSubmit = (e) => {
    e.preventDefault();
    if(
        isEmpty(name) ||
        isEmpty(email) ||
        isEmpty(message) ||
        isEmpty(subject) ) {
            setErrorMsg('All fields are required.')
                                }
        else if (!isEmail(email)) {
           setErrorMsg(
                 'Invalid Email'
            );
        } else {
              Axios.post('/api/users/contact',  cData).then(response => {
                 setSuccessMsg(
                      response.data.successMessage
                     
                 )
                 
        })

    }
    

}

useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
        
    }
}, [])



        return (
            <div>
       <section className="mb-4 container contact">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
        <div className =' w-50 '>

        {
        errorMsg && showErrormsg(errorMsg)
        }
        {
            successMsg && showSuccessmsg(successMsg)
        }
        </div>
    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form onSubmit = {handleSubmit}>
                <div className="row">

                     <div className="col-md-6 mb-4">
                        <div className="md-form mb-0">
                            <label for="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control" onChange = {handleContactChange}/>
                                                   
                        </div>
                    </div>
            
                                <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label for="email" className="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control" onChange = {handleContactChange}/>
                        </div>
                    </div>
            
                </div>

                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="md-form mb-0">
                            <label for="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control" onChange = {handleContactChange}/>
                        </div>
                    </div>
                </div>

                <div className="row">

                                <div className="col-md-12 mb-4">

                        <div className="md-form">
                            <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" onChange = {handleContactChange} rows="2" className="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>


            <div className="text-center text-md-left">
                <button type = 'submit' className="btn btn-info">Send</button>
            </div>
            <div className="status"></div>
            </form>
        </div>

        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Ch Muhammad Khan Road, Saddar, Rawalpindi, Pakistan</p>
                </li>

                <li> <a  style = {{textDecoration: 'none', color: 'black'}} href = 'tel: 03000188367'> <i className="fas fa-phone mt-4 fa-2x"></i> Call Now</a><br/>
                    <p>+ 92 300 0188 367</p>
                </li>

                <li> <a href="mailto:saeedchachar987654@gmail.com" style = {{textDecoration: 'none', color: 'black'}}><i className="fas fa-envelope mt-4 fa-2x"></i> Email Us</a>
                    <p>saeedchachar987654@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

    </section>
        </div>
                
        )
    }


export default Contact;
