/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import { NextResponse } from 'next/server';

type Props = {}

function SignInPage({}: Props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();
  


  const handleSignIn = async () => { 

    router.push("/dashboard/recruiter/");
    
    // try{
    //   const response:any = await axios.post('/api/signin',{email,password});
    //   console.log(response);
    //   if(response.status !== 200) {
    //     setError("Error logging in. Please try again.");
    //     return NextResponse.json({ error: "Please enter email and password" });
    //   }
    //   else {
    //     if(response.data.role === "developer")
    //       router.push("/student/");
    //     else if(response.data.role === "recruiter")
    //       router.push("/mentor/");
    //     else
    //     return NextResponse.json({ message: "Successfully logged in." });
    //   } 

    // }catch(error){
    //   console.error("Error logging in", error);
    //   setError("Error logging in. Please try again.");
    // }
  }

  
 
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className="shadow-xl h-[800px] w-[1400px] flex rounded-lg overflow-hidden">
        <div className="bg-[#18181b] lg:w-[50%] text-white p-12 lg:flex flex-col justify-between hidden ">
         
          <h1 className="text-3xl font-semibold">
            HireLink
          </h1>
          <div className='flex justify-center items-center'>

            <div className=" h-[256px] w-[256px] ease-in-out">
                <Image
                  src={"/dark_logo.png"}
                  alt="MentorLink Logo"
                  width={256}
                  height={256}
                  className=''
                />
            </div>

          </div>

          <h2 className="text-xl text-center">
            "Connecting Talent with Opportunity, One Link at a Time"
          </h2>
        </div>

        {/* sign in block */}
        <div className="flex flex-col gap-1 items-center justify-center lg:w-[50%] w-full  dark:border ">  
                <h2 className="text-3xl font-semibold">Welcome Back!</h2>
                <h3>Enter your email and password to Sign in</h3>
                <Input 
                  className="w-96 h-12 mt-6" 
                  type="Email" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  className="w-96 h-12 mt-6" 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
      
                <h3 className="text-red-500">{error}</h3> 

                <Button 
                  className="w-96 mt-4"
                  onClick = {handleSignIn}
                >Sign In with email</Button>
      
                <h2 className="text-center mt-4 mb-4">_____________OR_____________</h2>
      
                <Button variant= "outline" className="w-96 mt-4"><Link href="/register">Sign Up</Link></Button>

        </div>
      </div>
    </div>
    
  )
}

export default SignInPage