import React from 'react';

const Contact = () => {
  return (
    <div class="bg-violet-400">
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
        Contact me:
      </h1>
      <h2 className='py-4 text-2xl font-bold text-center text-[#001b5e]'> E-mail: fabio.eds@hotmail.com </h2>
      <h3 className='py-4 text-xl font-bold text-center text-[#001b5e]'>Phone Number: (424)542-1073</h3>
      <h4 className='py-4 text-lg font-bold text-center text-[#001b5e]'>Or please fill out the form below:</h4>
      <form
        action='https://getform.io/f/a405f396-f15e-4495-9d9f-e22c0cf5faf5'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              name='phone'
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            name='email'
          />
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='subject'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            rows='10'
            name='message'
          ></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full  p-4 rounded-lg'>
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
