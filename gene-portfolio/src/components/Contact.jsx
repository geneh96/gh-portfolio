import React from 'react'

const Contact = () => {
  console.log(process.env.REACT_APP_GETFORM)

  return (
    <div name='contact' className='w-full h-screen bg-[#4FB7FF] text-white flex justify-center items-center p-4'>
        <form method="POST" action={process.env.REACT_APP_GETFORM} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00000050]'>Contact</p>
                <p className='text-white py-4'>Feel free to reach out to me via email here!</p>
            </div>
            <input className='p-2 text-black' type="text" placeholder='Name' name='name'/>
            <input className = 'p-2 my-4 py-2 text-black' type="text" placeholder='Email' name='email'/>
            <textarea className='p-2 text-black' placeholder='Message' name='message' rows='10'></textarea>
            <button className='text-white border-2 hover:bg-[#00000050] hover:border-[#00000050] px-4 py-3 my-8 mx-auto flex items-center'>Send!</button>
        </form>
    
    </div>
  )
}

export default Contact