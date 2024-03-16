'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface ContactInformation {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}

interface CompanyInformation {
  companyName: string;
  commpanyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyWebsite: string;
  companyDescription: string;
}

interface Security {
  password: string;
  confirmPassword: string;
}

interface Recruiter {
  contactInformation: ContactInformation;
  companyInformation: CompanyInformation;
  security : Security;
  role : string;
}



const RecruiterRegisterPage = () => {

  const [recruiterInformation, setRecruiterInformation] = React.useState<Recruiter>({
    contactInformation: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: ''
    },
    companyInformation: {
      companyName: '',
      commpanyAddress: '',
      companyPhone: '',
      companyEmail: '',
      companyWebsite: '',
      companyDescription: ''
    },
    security: {
      password: '',
      confirmPassword: ''
    },
    role: 'recruiter'
  })

  const router = useRouter()

  const handleRegister = () => {
    console.log(recruiterInformation)

    // fetch('http://localhost:3000/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(recruiterInformation)
    // }).then(res => res.json())
    // .then(data => {
    //   if(data.success) {
    //     router.push('/login')
    //   }
    //   else{
    //     console.log(data.message)
    //   }
    // })
    
  }

  return (
    <div className='flex h-screen w-screen'>

    {/* resume upload part */}
    <div className='w-1/4 border-2 bg-[#e11d48] h-full p-10 flex flex-col justify-center items-center  gap-5'>


    <Image
      src ={"/dark_logo.png"}
      alt = "logo"
      width={300}
      height={300}
    />
    
    <h1 className='text-2xl font-bold text-white text-center'>
      Find the best talent or your <br />company
    </h1>
  
    </div>

    {/* form part */}

    <div className='flex flex-col justify-center items-center w-3/4 p-10  pr-40 overflow-scroll'>


      {/* contact information */}
      <div className='flex border w-full border-zinc-100 mb-10 shadow-lg rounded-lg'>
        
        <div className='w-48 p-10 h-full border-r-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'>
          <h1 className='bold text-2xl font-bold text-white'>Contact Information</h1>
        </div>

        <div className='flex flex-col gap-10 p-10' >

            <div className='flex gap-4'>
          
              <Input 
                placeholder="First Name" 
                value={recruiterInformation.contactInformation.firstName}
                onChange={(e) => setRecruiterInformation({...recruiterInformation, contactInformation: {...recruiterInformation.contactInformation, firstName: e.target.value}})}
                className='mb-5 w-52'
              />

              <Input 
                placeholder="Last Name" 
                value={recruiterInformation.contactInformation.lastName}
                onChange={(e) => setRecruiterInformation({...recruiterInformation, contactInformation: {...recruiterInformation.contactInformation, lastName: e.target.value}})}
                className='mb-5 w-52'
              />
            
            </div>

            <div className='flex gap-4'>
              <Input 
                placeholder="Phone" 
                value={recruiterInformation.contactInformation.phone}
                onChange={(e) => setRecruiterInformation({...recruiterInformation, contactInformation: {...recruiterInformation.contactInformation, phone: e.target.value}})}
                className='mb-5 w-52'
              />
              <Input 
                placeholder="Email" 
                value={recruiterInformation.contactInformation.email}
                onChange={(e) => setRecruiterInformation({...recruiterInformation, contactInformation: {...recruiterInformation.contactInformation, email: e.target.value}})}
                className='mb-5 w-96'
              />
            </div>

            <Input 
              placeholder="Address" 
              value={recruiterInformation.contactInformation.address}
              onChange={(e) => setRecruiterInformation({...recruiterInformation, contactInformation: {...recruiterInformation.contactInformation, address: e.target.value}})}
              className='mb-5'
            />
            
        </div>

      </div>

      {/* company information */}

      <div className='flex border w-full border-zinc-100 mb-10 shadow-lg'>
          
          <div className='w-48 p-10 h-full border-r-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'>
            <h1 className='bold text-2xl font-bold text-white'>Company Information</h1>
          </div>
  
          <div className='flex flex-col gap-10 p-10' >
  
              <div className='flex gap-4'>
            
                <Input 
                  placeholder="Company Name" 
                  value={recruiterInformation.companyInformation.companyName}
                  onChange={(e) => setRecruiterInformation({...recruiterInformation, companyInformation: {...recruiterInformation.companyInformation, companyName: e.target.value}})}
                  className='mb-5 w-52'
                />
  
                <Input 
                  placeholder="Company Address" 
                  value={recruiterInformation.companyInformation.commpanyAddress}
                  onChange={(e) => setRecruiterInformation({...recruiterInformation, companyInformation: {...recruiterInformation.companyInformation, commpanyAddress: e.target.value}})}
                  className='mb-5 w-52'
                />
              
              </div>
  
              <div className='flex gap-4'>
                <Input 
                  placeholder="Company Phone" 
                  value={recruiterInformation.companyInformation.companyPhone}
                  onChange={(e) => setRecruiterInformation({...recruiterInformation, companyInformation: {...recruiterInformation.companyInformation, companyPhone: e.target.value}})}
                  className='mb-5 w-52'
                />
                <Input 
                  placeholder="Company Email" 
                  value={recruiterInformation.companyInformation.companyEmail}
                  onChange={(e) => setRecruiterInformation({...recruiterInformation, companyInformation: {...recruiterInformation.companyInformation, companyEmail: e.target.value}})}
                  className='mb-5 w-96'
                />
              </div>
  
              <div className='flex gap-4'>
                <Input 
                  placeholder="Company Website" 
                  value={recruiterInformation.companyInformation.companyWebsite}
                  onChange={(e) => setRecruiterInformation({...recruiterInformation, companyInformation: {...recruiterInformation.companyInformation, companyWebsite: e.target.value}})}
                  className='mb-5 w-52'
                />
              </div>
  
              <Input 
                placeholder="Company Description" 
                value={recruiterInformation.companyInformation.companyDescription}
                onChange={(e) => setRecruiterInformation({...recruiterInformation, companyInformation: {...recruiterInformation.companyInformation, companyDescription: e.target.value}})}
                className='mb-5'
              />

            </div>
          
          </div>

          {/* security */}
          <div className='flex border w-full border-zinc-100 mb-10 shadow-lg'>
              
              <div className='w-48 p-10 h-full border-r-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'>
                <h1 className='bold text-2xl font-bold text-white'>Security</h1>
              </div>
      
              <div className='flex flex-col gap-10 p-10' >
      
                  <div className='flex gap-4'>
                
                    <Input 
                      placeholder="Password" 
                      value={recruiterInformation.security.password}
                      onChange={(e) => setRecruiterInformation({...recruiterInformation, security: {...recruiterInformation.security, password: e.target.value}})}
                      className='mb-5 w-52'
                    />
      
                    <Input 
                      placeholder="Confirm Password" 
                      value={recruiterInformation.security.confirmPassword}
                      onChange={(e) => setRecruiterInformation({...recruiterInformation, security: {...recruiterInformation.security, confirmPassword: e.target.value}})}
                      className='mb-5 w-52'
                    />
                  
                  </div>
      
                </div>

                 {/* Register button */}
             <button className='bg-black h-[40px] w-[200px] text-white px-2 rounded-md m-10
              ' onClick={handleRegister}
              >
                Register
              </button>

            </div>

      </div>

      
    </div>    
  )
}

export default RecruiterRegisterPage