import React from 'react'
import  Johnimage from '../images/me.JPG'
import '../About/About.css'
const About = () => {
  return (
    <div className='w-100 about' id="about">
        <div className='container'>
        <div className='row pt-5'>
            <div className='col-12 col-md-6 col-lg-6 AboutImagePart'>
             <img src={Johnimage} alt='not-found' style={{
                border:'2px solid red'
             }}/>
            </div>

            <div className='col-12 col-md-6 col-lg-6  AboutTextPart text-white'>
             <div>
                <h3>
                    Hello,Iam John
                </h3>
                <p>I am apassionate and extremly motivcated new front-end developer.
                    i believe i stand out due to my passion for continous innovation and pushing
                    bring foward new ideas.With my skills i identify real-world challenges and develop solutions
                    that bring efficiency amd improvement to the lives of users and also showcase improvements
                    can make a meaningful impact in the user and the business
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td className='pe-5'>Name</td>
                            <td>:JohnTheDev</td>
                        </tr>
                        <tr>
                            <td className='pe-5'>Age</td>
                            <td>:22</td>
                        </tr>
                        <tr>
                            <td className='pe-5'>Address</td>
                            <td>:Nairobi,Kenya</td>
                        </tr>
                        <tr>
                            <td className='pe-5'>Phone</td>
                            <td>:+254706219186</td>
                        </tr>
                        <tr>
                            <td className='pe-5'>Email</td>
                            <td>:John@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
                <button className='btn downloadcv mt-4'>Download CV</button>
             </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About
