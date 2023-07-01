import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaLink } from 'react-icons/fa';
import { BsServer } from 'react-icons/bs';
import { HiCode } from 'react-icons/hi';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Portfolio() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [projects, setProjects] = useState([])
  const [model, setModel] = useState({})
  const [reactProjects, setReactProjects] = useState([])

  useEffect(() =>{
    fetch('http://localhost:5000/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  useEffect(() =>{
    fetch('http://localhost:5000/reactProjects')
      .then(res => res.json())
      .then(data => setReactProjects(data))
  }, [])

  const showDetail = (project) => {
    fetch(`http://localhost:5000/projects/${project.id}`)
    .then(res => res.json())
    .then(data => setModel(data))
  }


  return (
    <div className='container pt-5' id='portfolio'>
        <h2 style={{fontFamily:"Orbitron"}} className='text-center mb-3 mb-lg-4 text-uppercase'><span className='me'>Portfolio</span></h2>
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value}  onChange={handleChange} aria-label="basic tabs example" centered  indicatorColor="primary">
                <Tab  className='me2' label="All Projects" {...a11yProps(0)} />
                <Tab  className='me2' label="React" {...a11yProps(1)} />
                <Tab  className='me2' label="Javascript" {...a11yProps(2)} />
                <Tab  className='me2' label="HTML & CSS" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='row mt-3'>
                    {
                        projects.map(project =>             
                        <div className="col-lg-6">
                           <div className="card mb-3" style={{height:"280px"}}> 
                               <div className="scroll-item h-100" style={{backgroundImage: `url(${project.img})`}}>
                                   <div className="card-body d-flex justify-content-end align-items-end h-100">
                                       <button data-bs-toggle="modal" data-bs-target="#myModel" className='btn random-btn text-white px-3' onClick={()=>showDetail(project)}>View details</button>
                                   </div>
                               </div>      
                           </div>
                       </div>)
                    }
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
               <div className='row mt-3'>
                    {
                        reactProjects.map(reactProject =>             
                        <div className="col-lg-6">
                           <div className="card mb-3" style={{height:"280px"}}> 
                               <div className="scroll-item h-100" style={{backgroundImage: `url(${reactProject.img})`}}>
                                   <div className="card-body d-flex justify-content-end align-items-end h-100">
                                       <button data-bs-toggle="modal" data-bs-target="#myModel" className='btn random-btn text-white px-3' onClick={()=>showDetail(reactProject)}>View details</button>
                                   </div>
                               </div>      
                           </div>
                       </div>)
                    }
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
        </Box>
        <div className="modal fade" id="myModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header text-black">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{model.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-black">
                        <h4>{model.name}</h4>
                        <p>{model.details}.</p>
                        <div className='d-flex justify-content-between'>
                            <p><a target='blank' className='me3 btn-link fw-bold d-flex align-items-center gap-2' href={model.liveLink}><FaLink/><span>Live site</span></a></p>
                            <p><a target='blank' className='me3 btn-link fw-bold d-flex align-items-center gap-2' href={model.clintSiteCode}><HiCode/><span>Clint site code</span></a></p>
                            <p><a target='blank' className='me3 btn-link fw-bold d-flex align-items-center gap-2' href={model.serverSiteCode}><BsServer/><span>Server site code</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}