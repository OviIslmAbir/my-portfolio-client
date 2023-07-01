import React from 'react';
import Lottie from "lottie-react";
import contact from "../../assets/contact.json";
import {FaEnvelope, FaUser} from 'react-icons/fa';
import { motion } from "framer-motion"
import {fadeIn} from '../../Shared/variants'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const comment = form.comment.value
        console.log(comment)
        const templateParams = {
          from_name: name,
          from_email: email,
          message: comment
        };

        emailjs.send('service_1bqveej', 'template_1nqkmhc', templateParams, 'Kl-XD01YW0C3gd-WS')
          .then((response) => {
            if(response.status === 200){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Mail send successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
            }
          })
          .catch((error) => {
            console.error('Email failed to send:', error);
          });
      
      };
      
    return (
        <div className='container pt-5' id='contact'>
            <motion.h2  variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}} style={{fontFamily:"Orbitron"}} className='text-center mb-5 mb-lg-0 text-uppercase'><span className='me'>Contact Me</span></motion.h2>
            <div className="row align-items-center mx-5">
                <motion.div className="col-lg-6">
                    <form style={{width:"80%"}} className='mx-auto' onSubmit={handleSubmit}>
                        <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="input-group mb-3">
                            <span className="input-group-text p-2" id="basic-addon1"><FaUser/></span>
                            <input name='name' type="text" className="form-control p-2" placeholder="Enter your name"/>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="input-group mb-3">
                            <span className="input-group-text p-2" id="basic-addon1"><FaEnvelope/></span>
                            <input name='email' type="email" className="form-control p-2" placeholder="Enter your email" />
                        </motion.div>
                        <motion.textarea name='comment' variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="form-control" cols={12} rows={5} placeholder="Write your comment here"></motion.textarea>
                        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='text-center'>
                           <input type="submit" value="Send" className='btn random-btn mt-3 w-100' />
                        </motion.div>
                    </form>
                </motion.div>
                <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="col-lg-6 d-lg-block d-none">
                     <Lottie animationData={contact} loop={true} />
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;