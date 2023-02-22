import React from 'react'
import UPSLogo from '../assets/ups-logo.png'
import ValleyLogo from '../assets/valley-logo.png'

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#4FB7FF] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className=' pb-8 pl-4'> {/*anything above small will make text go to right */}
                    <p className='text-4xl font-bold inline border-b-4 border-[#0000009d]'>Experience</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-auto-cou sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left'>
                    <img  src={UPSLogo} alt="UPS logo" style={{width: '90px'}}/> {/*Logo 1 placeholder*/}
                    <p className='text-3xl font-bold'>Applications Developer</p>
                    <br/>
                    <p className='text-2xl font-extralight'>June 2018-July 2022</p>
                </div>
                <div>
                    <p className='text-xl font-medium'>From summer intern of 2018 to Applications Developer I have worked on many projects in UPS utilizing Microsoft .NET tech stack</p>
                    <br/>
                    <ul className='list-disc'>
                    <li>               
                        <p>I was tasked with creating a Windows Service for the UPS Premier project, that dealt with the delivery of critical healthcare goods. This service utilizes C#, JSON, and RESTful methodologies</p>
                    </li> 
                    <br/>
                    <li>               
                        <p>Developed reporting tools for UPS Hubs to track packages internally within the hub as package sortation occured. Tools used include C#, ASP.NET MVC, WCF, HTML, CSS, Javascript, jQuery, XML, SQL Server, TFS and Agile Methodologies.</p>
                        </li> 
                        <br/>
                        <li>
                            <p>
                                Worked closely with Payroll Team to migrate applications written in Classic ASP to ASP.NET Web Pages. Applications were developed with tools such as VB.NET, HTML, CSS, VBScript, JavaScript, PL/SQL in Oracle, and Version Control via Team Foundation Server
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <br/>
            <div className='max-w-[1000px] w-full grid grid-auto-cou sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-left'>
                    <img  src={ValleyLogo} alt="UPS logo" style={{height: '110px'}}/> {/*Logo 1 placeholder*/}
                    <p className='text-3xl font-bold'>Web Developer Intern</p>
                    <br/>
                    <p className='text-2xl font-extralight'>May 2017-August 2017</p>
                </div>
                <div className='py-12'>         
                <p>Helped create web applications or update existing ones for the company's internal use. The applications I worked on had functionalities to search and upload data and files to the database. These applications were made with tools such as ASP.NET MVC framework in C#, Bootstrap, jQuery, Microsoft SQL Server, and Crystal Reports.</p>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default Experience