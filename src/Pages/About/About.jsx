import React from 'react';
import Lottie from "lottie-react";
import man from "../../assets/man.json";
import { motion } from "framer-motion"
import {fadeIn} from '../../Shared/variants'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';



const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <div style={{marginBottom:"220px"}} className='container pt-5' id='about' ref={ref}>
            <div className="row align-items-center mx-5">
                <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}}  className="col-lg-6 mb-lg-0 mb-5 d-none d-lg-block">
                    <Lottie animationData={man} loop={true} />
                </motion.div>
                <motion.div className="col-lg-6" variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}} >
                    <h3 style={{fontFamily:"Orbitron"}}><span className='me text-uppercase fw-bold'>About Me</span></h3>
                    <h5 className='mt-3'>I am a Front end developer with over 3 years of experience.</h5>
                    <p style={{textAlign:"justify", fontSize:"15px"}} className='mt-3'>
                        <small>
                             I am a web developer who loves creating beautiful websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development. I enjoy using frameworks like React and Vue.js. Attention to detail and problem-solving are my strengths. Let's collaborate and build amazing web solutions together.
                        </small>
                    </p>
                    <div className='d-flex gap-5'>
                        <div>
                            <span style={{fontSize:"35px"}} className='me'>{inView ? <CountUp start={0} end={3} duration={4} /> :  <CountUp start={0} end={0} />}</span>
                            <p className='' style={{fontFamily:"Orbitron"}}>
                                <small>
                                    Years of <br />
                                    Experience
                                </small>
                            </p>
                        </div>
                        <div>
                            <span style={{fontSize:"35px"}} className='me'>{inView ? <CountUp start={0} end={60} duration={3} /> : <CountUp start={0} end={0} />}+</span>
                            <p className='' style={{fontFamily:"Orbitron"}}>
                                <small>
                                    Projects <br />
                                    Completed
                                </small>
                            </p>
                        </div>
                        <div>
                            <span style={{fontSize:"35px"}} className='me'>{inView ? <CountUp start={0} end={50} duration={3} /> : <CountUp start={0} end={0} />}+</span>
                            <p className='' style={{fontFamily:"Orbitron"}}>
                                <small>
                                    React <br />
                                    Projects
                                </small>
                            </p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                            <button className='btn random-btn px-3'>Contact me</button>
                            <a href="" className='me btn-link'>My Portfolio</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;