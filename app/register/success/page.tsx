import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SuccessPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='text-center flex flex-col'>
      <Image src={"/logo.png"} alt="logo" width={300} height={300} />
        <h1 className='text-4xl font-bold'>Success!</h1>
        <p className='text-xl'>You have successfully registered.</p>

        {/* sign in button */}
        <button className="bg-black h-[40px] w-[200px] text-white px-2 rounded-md m-10">
          <Link href="/signin">Sign in</Link>
        </button>
      </div>
    </div>
  )
}

export default SuccessPage