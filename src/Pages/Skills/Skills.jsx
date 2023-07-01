import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaGithub, FaCss3, FaReact} from 'react-icons/fa';
import { BsBootstrapFill} from 'react-icons/bs';
import { BiLogoFirebase, BiLogoJavascript } from 'react-icons/bi';
import { SiExpress, SiMongodb } from 'react-icons/si';
import {fadeIn} from '../../Shared/variants'
import { motion } from "framer-motion"
const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
    })
    const [showAll, setShowAll] = useState(false)
    const showMore = () => {
        const comfortable = document.getElementById('comfortable')
        comfortable.classList.remove('d-none')
        const tools = document.getElementById('tools')
        tools.classList.remove('d-none')
        setShowAll(true)
    } 
    const showLess = () => {
        const comfortable = document.getElementById('comfortable')
        comfortable.classList.add('d-none')
        const tools = document.getElementById('tools')
        tools.classList.add('d-none')
        setShowAll(false)
    } 
    return (
      <motion.div style={{marginBottom:"200px"}} variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}}   className='container pt-5' id='skills' ref={ref}>
         <h2 style={{fontFamily:"Orbitron"}} className='text-center mb-3 mb-lg-4 text-uppercase'><span className='me'>My Skills</span></h2>
         <div className="row justify-content-center text-center">
            <div className="col-lg-4">
                <h4>
                    <span className='me'>
                        Expertise
                    </span>
                </h4>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center gap-1'><FaHtml5 style={{color:"orangered"}}/> <span>HTML</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={85} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center gap-1'> <FaCss3 className='text-primary'/> <span>CSS</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={60} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center gap-1'> <BsBootstrapFill style={{color:"#b936ee"}}/> <span>Bootstrap</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={90} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center gap-1'> <BiLogoFirebase className='text-warning'/> <span>Firebase authentication</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={70} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center gap-1'> <FaReact className='text-info'/> <span>React & React router</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={80} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0 d-none d-lg-block" id='comfortable'>
                <h4><span className='me'>Comfortable</span></h4>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center gap-1'> <BiLogoJavascript className='text-warning'/> <span>Javascript</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={50} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center gap-1'> <img src="es6.png" alt="" style={{width:"15px"}} /> <span>ES6</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={60} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4  d-flex align-items-center gap-1'> <SiExpress style={{backgroundColor:"white", color:"black", padding:"1px"}}/> <span>Express.js</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={60} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4  d-flex align-items-center gap-1'> <SiMongodb className='text-success'/> <span>MongoDB</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={40} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4  d-flex align-items-center gap-1'><img src="api.png" alt="" /> <span>Rest Api</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={70} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0 d-none d-lg-block" id='tools'>
                <h4><span className='me'>Tools</span></h4>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4  d-flex align-items-center gap-1'> <img src="vs.svg" alt="" style={{width:"16px"}}/> <span>VS Code</span></h6>
                    {inView ? <ProgressBar labelSize='12px'  height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={70} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4  d-flex align-items-center gap-1'><FaGithub/> <span>Github</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={65} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center  gap-1'><img src='fig.png' style={{width:"10px"}}/> <span>Figma</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={50} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center  gap-1'> <img src='canva.svg' style={{width:"16px"}}/> <span>Canva</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={40} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
                <div className='w-75 mx-auto text-start'>
                    <h6 style={{fontFamily:"Work Sans"}} className='mt-4 d-flex align-items-center  gap-1'> <img src='chrome.svg' style={{width:"16px"}}/> <span>Chrome dev tools</span></h6>
                    {inView ? <ProgressBar labelSize='12px' height='15px' bgColor={"linear-gradient(92.23deg,#ff56f6 21.43%,#b936ee 50.63%,#3bace2 100%,#406aff 117.04%)"} labelColor='black' animateOnRender={true} completed={60} transitionDuration='2s' /> : <ProgressBar height='15px'completed={0} />}
                </div>
            </div>
         </div>
         <div className='text-center d-block d-lg-none mt-3'>
            {
                showAll ? <button onClick={showLess} className="btn random-btn px-3">Show less</button> :
                <button onClick={showMore} className="btn random-btn px-3">Show more</button> 
                
            }
         </div>
      </motion.div>
    );
};

export default Skills;