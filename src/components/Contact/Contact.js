import React from 'react'
import '../Contact/Contact.css'
const Contact = () => {
  return (
    <div className='contact text-center text-white'>
        <br/>
        <h1>Contact</h1>
        <br/>
        <hr/>
        <div className='mx-md-auto text-center container'>
          <form>
            <div className='form-group mt-2'>
                <label for="Username">Username:</label>
                <input className='form-control' type='text' id="Username" placeholder='enter Username'/>
            </div>
            <div className='form-group mt-2'>
                <label for="email">Email:</label>
                <input className='form-control' type='email' id="email" placeholder='enter email'/>
            </div>
            <div className='form-group mt-2'>
                <label for="message">Message:</label>
                <textarea className='form-control' placeholder='message' col='30' rows='10'></textarea>
            </div>
            <button type='submit' className='btn mt-2 mb-3'>Message Me</button>
          </form>
        </div>
      
    </div>
  )
}

export default Contact
