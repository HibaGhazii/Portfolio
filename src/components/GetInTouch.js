import axios from 'axios';
import React, { useState } from 'react'

const GetInTouch = () => {

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const messages = {FirstName,LastName,Email,PhoneNumber,Message};

    axios.post('http://localhost:3000/messages', messages, {
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      window.open('/','_self');
    }).catch((error) => {
      console.error('Error sending message: ',error);
    })
  }

  return (
    <div id='Message' className="flex flex-row bg-[url('../public/img/footer-bg.png')] bg-cover mt-28 pb-28">
      <div className='w-1/2 pl-32'>
        <img src="/img/contact-img.svg" className='w-[500px] h-[500px]' />
      </div>

      <form onSubmit={handleSubmit} className='w-1/2 py-12 pl-16 flex flex-col gap-y-2 text-black'>
        <p className='text-white font-bold text-3xl pb-6'>Get In Touch</p>
        <div>
          <input type="text" required value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First Name' className='p-5 h-12 w-[270px] mr-1 rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none'/>
          <input type="text" required value={LastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder='Last Name' className='p-5 border border-white h-12 w-[270px] rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none'/>
        </div>
        <div>
          <input type="text" value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className='p-5 border border-white h-12 w-[270px] mr-1 rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none'/>
          <input type="text" value={PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} required placeholder='Phone Number' className='p-5 border border-white h-12 w-[270px] rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none'/>
        </div>
        <div>
          <textarea required value={Message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Message' className="px-5 py-3 border-4 border-white w-[545px] h-[160px] rounded-[14px] placeholder:text-757575 shadow-md shadow-fuchsia-400 focus:outline-none" ></textarea>
        </div>
        <button className="w-[110px] p-2 rounded-[8px] font-bold bg-gradient-to-r from-fuchsia-500 to-55106D text-white shadow-md shadow-fuchsia-400">Send</button>
      </form>
    </div>
  )
}

export default GetInTouch;
