import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import code from "../../../assets/code.json";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion"
import {fadeIn} from '../../../Shared/variants'
import resume from '../../../assets/resume.pdf'
const Home = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume.pdf';
        link.click();
      };
    return (
        <div style={{marginBottom:"90px"}} className='container pt-3 pb-3' id='home'>
            <div>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2><Link to='/'  style={{textDecoration:"none", color:"white"}}><span className='me'>Ovi</span> Islam <span className='me'>Abir</span></Link></h2>
                    <button onClick={handleDownloadResume} className='random-btn btn px-4 py-2'>Download My Resume</button>
                </div>
                <div className='row align-items-center mx-lg-5 mt-5 mt-lg-0'>
                     <div className="col-lg-6 mt-lg-0 mt-5 text-center text-lg-start">
                         <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}}  className='text-uppercase' style={{fontSize:"55px", fontWeight:"bold"}}>Ovi Islam <span>Abir</span></motion.h2>
                         <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='mb-3'>
                            <h3 style={{fontSize:"35px", fontWeight:"bold"}}>I AM A <TypeAnimation 
                               sequence={[
                                'DEVELOPER',
                                 2000,
                                'DESIGNER',
                                 2000,
                                'GAMMER',
                                 2000
                               ]}
                               repeat={Infinity}
                               speed={50}
                               className='me'
                            />
                            </h3>
                        </motion.div>
                        <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}}>I am a professional web developer & designer.</motion.p>
                        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='d-flex align-items-center gap-4 justify-content-lg-start justify-content-center mt-3'>
                            <button className='btn random-btn px-3'>Contact me</button>
                            <a href="" className='me btn-link'>My Portfolio</a>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className='d-flex align-items-center gap-4 mt-3 justify-content-lg-start justify-content-center'>
                           <a href="https://www.facebook.com/profile.php?id=100080089372110" target='blank' className='text-white' style={{fontSize:"25px"}}><FaFacebook/></a>
                           <a href="https://github.com/OviIslmAbir" target='blank' className='text-white' style={{fontSize:"25px"}}><FaGithub/></a>
                           <a href="https://www.linkedin.com/in/abir-ovi-18686927b/" target='blank'  className='text-white' style={{fontSize:"25px"}}><FaLinkedin/></a>
                        </motion.div>
                     </div>
                     <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="col-lg-6 d-none d-lg-block">
                       <Lottie animationData={code} loop={true} />
                     </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;