import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#4FB7FF] text-white' >
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'> {/*anything above small will make text go to right */}
                    <p className='text-4xl font-bold inline border-b-4 border-[#0000009d]'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi! My name is Gene, thanks for checking out my page. Feel free to look around!</p>
                </div>
                <div>
                    <p>I had graduated from Montclair State University in the spring of 2018. I've worked on many different projects throughout my years as a software developer. I have experience in Web Development, Windows Applications (such as Winforms and WPF), as well as Windows Services. I am always interested in learning new tech to further sharpen my toolset as a developer!</p>
                </div>
            </div>             
        </div>
    </div>
  )
}

export default About