import React, { useEffect} from 'react'
import '../Projects/Projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import JohnImage from '../images/me.JPG'
const Projects = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className='projects p-5'>
            <div className='myprojectsText pt-5'>
                <h3>MY <span>PROJECTS</span></h3><hr></hr>
            </div>

            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                        <div className='card text-dark'>
                          <img src={JohnImage} className='img' alt='not found' height='280px'/>
                          <div className='card-body'>
                            <h5 className='card-title'>Social Media App</h5>
                            <p>bjhvbjvhbm vhjmb h nmxb xhjdmb hjmbdghjmbg hj mfgmhgbn</p>
                            <a href='' className='btn'>More Details</a>
                          </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                        <div className='card text-dark'> 
                          <img src={JohnImage} className='img' alt='not found' height='280px'/>
                          <div className='card-body'>
                            <h5 className='card-title'>Social Media App</h5>
                            <p>bjhvbjvhbm vhjmb h nmxb xhjdmb hjmbdghjmbg hj mfgmhgbn</p>
                            <a href='' className='btn'>More Details</a>
                          </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='card text-dark'>
                          <img src={JohnImage} className='img' alt='not found' height='280px'/>
                          <div className='card-body'>
                            <h5 className='card-title'>Social Media App</h5>
                            <p>bjhvbjvhbm vhjmb h nmxb xhjdmb hjmbdghjmbg hj mfgmhgbn</p>
                            <a href='' className='btn'>More Details</a>
                          </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Projects
