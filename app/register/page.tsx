// Code: Register page for students and teachers

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const RegisterPage = () => {
  return (
    <div className='flex h-screen w-screen p-5  '>

      <div className='h-full w-1/2 flex flex-col justify-center items-center bg-[#fbfbfb] rounded-l-2xl shadow-xl border-2 gap-4'>  
          <Image
            src="/recruiter.png"
            alt="mentorship"
            width={600}
            height={600}
          />
        <h1 className='text-4xl'>Join hireLink as Recruiter</h1>
        <Button className="w-52 h-12 mt-5 text-lg"><Link href="/register/recruiter">Register as Recruiter</Link></Button>
      </div>
      <div className='h-full w-1/2 flex flex-col justify-center items-center bg-zinc-800 text-white rounded-r-2xl shadow-r-lg gap-4'>
        <Image
            src="/candidate.png"
            alt="mentorship"
            width={600}
            height={600}
          />
        <h1 className='text-4xl'>Join HireLink as a candidate</h1>
        <Button variant={'outline'} className=" text-black w-52 h-12 mt-5 text-lg"><Link href="/register/candidate">Register as Candidate</Link></Button>

      </div>

    </div>
  )
}

export default RegisterPage