import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsChatSquare } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-scroll';
import {Tooltip} from 'react-tippy';
  
const Navbar = () => {
    return (
        <nav style={{bottom:"2rem", zIndex:"4"}} className='position-fixed w-100 overflow-hidden'>
            <div  className='container mx-auto'>
                 <div style={{backgroundImage: "url('site-bg.jpg')", height:"82px", borderRadius:"100px", maxWidth:"460px", backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className='w-100 mx-auto d-flex justify-content-between px-5 align-items-center shadow-lg'>
                    <Tooltip
                        title="Home"
                        position="top"
                        size="small"
                        arrow
                    >
                      <Link  to='home' activeClass='active' smooth={true} spy={true}  duration={0.5} className="text-white d-flex justify-content-center align-items-center p-3"><BiHomeAlt style={{height:"20px", width:"20px", cursor:"pointer"}}/></Link>
                    </Tooltip>
                    <Tooltip
                        title="About Me"
                        position="top"
                        size="small"
                        arrow
                    >
                       <Link  to='about' activeClass='active' smooth={true} spy={true} duration={0.5}  className="text-white d-flex justify-content-center align-items-center p-3"><BiUser style={{height:"20px", width:"20px", cursor:"pointer"}}/></Link>
                    </Tooltip>
                    <Tooltip
                        title="Skills"
                        position="top"
                        size="small"
                        arrow
                    >
                        <Link to='skills' activeClass='active' smooth={true} spy={true} duration={0.5} className="text-white d-flex justify-content-center align-items-center p-3"><FaReact style={{height:"20px", width:"20px", cursor:"pointer"}}/></Link>
                    </Tooltip>
                    <Tooltip
                        title="Portfolio"
                        position="top"
                        size="small"
                        arrow
                    >
                        <Link to='portfolio' activeClass='active' smooth={true} spy={true} duration={0.5} className="text-white d-flex justify-content-center align-items-center p-3"><BsClipboardData style={{height:"20px", width:"20px", cursor:"pointer"}}/></Link>
                    </Tooltip>
                    <Tooltip
                        title="Contact Me"
                        position="top"
                        size="small"
                        arrow
                    >
                        <Link to='contact' activeClass='active' smooth={true} spy={true} duration={0.5}  className="text-white d-flex justify-content-center align-items-center p-3"><BsChatSquare style={{height:"20px", width:"20px", cursor:"pointer"}}/></Link>
                    </Tooltip>
                 </div>
            </div>
        </nav>
    );
};

export default Navbar;