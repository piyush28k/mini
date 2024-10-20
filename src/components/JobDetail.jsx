import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../../public/Temp.json'

function JobDetail() {
    const {id} = useParams()
    const job = jobs.find((job)=>(job.id==id));

    // console.log(job)

  return (
    <div className='m-20'>
        <div
            className="w-full flex justify-between items-center my-7"
        >
            <div className="h-full w-full flex">
            <img className="h-20 w-20 rounded-xl" src={job.img} alt="" />
            <div className="ml-5">
                    <h1 className="text-4xl font-bold">{job.role}</h1>
                    <h4 className='text-lg text-slate-600'>{job.name}</h4>
                </div>
            </div>
            <div className='py-2 w-40 px-7 bg-[#4869D7] text-white text-xl rounded-xl hover:bg-[#112469] hover:cursor-pointer'>apply now</div>
        </div>
        <div className='flex gap-5'>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"
              />
            </svg>
            <div>{job.location}</div>
            
        </div>
        <div className='flex gap-5 my-2'>
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 7.23792L12.0718 14.338L4 7.21594V19H13V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12H20V7.23792ZM19.501 5H4.51146L12.0619 11.662L19.501 5ZM20 18H23L19 22L15 18H18V14H20V18Z"></path></svg>
            <div>139 Applicants</div>
        </div>
        <div className='text-lg'> <span className='font-bol text-3xl mr-6'>$</span> {job.salary}</div>
        <div className='text-sm mt-10 p-5'>{job.disc}</div>
        <div className='text-sm p-5'>{job.disc}</div>

    </div>
  )
}

export default JobDetail