import React from 'react'
import Johnimage from '../images/me.JPG'
import '../Home/Home.css'
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className='home mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-6 homeTextPart text-white'>
            <div>
              <h1 className='welcome'>WELCOME!!</h1>
              <h2>
                <Typewriter
  options={{
    strings: ['Hello i am  John', 'A fullstack mobile and web developer'],
    autoStart: true,
    loop: true,
  }}
/>

              </h2>
              <p className='text-white'>I'm a front-end developer with 5years experience.My expertise is to
                create front-end design for websites</p>

              <div className='icons'>
                <a href=''><i>Github</i></a>
                <a href=''><i>Github</i></a>
                <a href=''><i>Github</i></a>
                <a href=''><i>Github</i></a>
              </div>

            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6 homeImagePart'>
            <img className='avatar' src={Johnimage} alt="JohnTheDev" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
