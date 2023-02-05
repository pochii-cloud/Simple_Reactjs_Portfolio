import React from 'react'
import { useEffect} from 'react'
import '../Services/Services.css'
import FontAwesomeIcon from 'react-fontawesome'
import {faCode} from 'react-fontawesome';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Services = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return (
        <div className='services p-5'>
            <div className='myservicesText pt-5'>
                <h3>MY <span>SERVICES</span></h3><hr></hr>
            </div>

            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                        <div className='border service p-4'>
                            <p className='serviceIcon'>
                                <span className='border p-2'><FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                </span>
                                <h5 className='mt-4'>WEB DEVELOPMENT</h5>
                                <p>Description DescriptionDescription
                                    DescriptionDescriptionDescriptionv</p>

                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                        <div className='border service p-4'>
                            <p className='serviceIcon'>
                                <span className='border p-2'>ICON1</span>
                                <h5 className='mt-4'>WEB DEVELOPMENT</h5>
                                <p>Description DescriptionDescription
                                    DescriptionDescriptionDescriptionv</p>

                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='border service p-4'>
                            <p className='serviceIcon'>
                                <span className='border p-2'>ICON1</span>
                                <h5 className='mt-4'>WEB DEVELOPMENT</h5>
                                <p>Description DescriptionDescription
                                    DescriptionDescriptionDescriptionv</p>

                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Services
