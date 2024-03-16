'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface ContactInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

interface Education {
  degree: string;
  school: string;
  major: string;
  graduationDate: string;
  aggrigateMarks: number;
}

interface WorkExperience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Certification {
  name: string;
  issuingOrganization: string;
  issuedDate: string;
  expiryDate: string;
}

interface Project {
  title: string;
  date: string;
  description: string;
}

interface Achievement {
  title: string;
  date: string;
}

interface AdditionalInformation {
  languages: string[];
  volunteerExperience: string;
  publications: string;
  interests: string[];
}

interface Reference {
  name: string;
  title: string;
  company: string;
  contactInformation: string;
}

interface security {
  password: string;
  confirmPassword: string;
}
interface role {
  data: string;
}


interface ResumeInformation {
  contactInformation: ContactInformation;
  summary: string;
  education: Education[];
  workExperience: WorkExperience[];
  skills: string[];
  certifications: Certification[];
  projects: Project[];
  achievements: Achievement[];
  additionalInformation: AdditionalInformation;
  references: Reference[];
  security: security;
  role: role;
}

interface FormData{
  file: File
}


const Register = () => {

  const [resumefile, setResumefile] = React.useState<File | null>(null)

  const [resumeInformation, setResumeInformation] = React.useState<ResumeInformation>({
    
    contactInformation: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, City, Country'
    },
    summary: 'Experienced software engineer with expertise in web development and a passion for problem-solving.',
    education: [
      {
        degree: 'Bachelor of Science',
        school: 'University of Example',
        major: 'Computer Science',
        graduationDate: 'May 2022',
        aggrigateMarks: 3.8 // Dummy aggregate marks
      },
      {
        degree: 'Master of Business Administration',
        school: 'Business School',
        major: 'Business Administration',
        graduationDate: 'December 2024',
        aggrigateMarks: 3.9 // Dummy aggregate marks
      }
    ],
    workExperience: [
      {
        jobTitle: 'Software Engineer',
        company: 'TechCorp',
        location: 'New York, NY',
        startDate: 'June 2022',
        endDate: 'Present',
        description: 'Developing scalable web applications using React and Node.js.'
      },
      {
        jobTitle: 'Intern',
        company: 'StartupX',
        location: 'San Francisco, CA',
        startDate: 'May 2021',
        endDate: 'August 2021',
        description: 'Assisted in front-end development tasks and conducted market research.'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Python'],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issuingOrganization: 'Amazon Web Services',
        issuedDate: 'January 2023',
        expiryDate: 'January 2026'
      },
      {
        name: 'Google Certified Professional Cloud Architect',
        issuingOrganization: 'Google Cloud',
        issuedDate: 'March 2023',
        expiryDate: 'March 2026'
      }
    ],
    projects: [
      {
        title: 'E-commerce Website',
        date: '2022',
        description: 'Developed a full-stack e-commerce website using MERN stack.'
      },
      {
        title: 'Data Analysis Tool',
        date: '2021',
        description: 'Created a data analysis tool using Python and pandas library.'
      }
    ],
    achievements: [
      {
        title: 'Dean\'s List for Academic Excellence',
        date: '2021'
      },
      {
        title: 'Hackathon Winner',
        date: '2020'
      }
    ],
    additionalInformation: {
      languages: ['Spanish', 'French'],
      volunteerExperience: 'Volunteered at local animal shelter.',
      publications: 'Published research paper on artificial intelligence.',
      interests: ['Hiking', 'Photography']
    },
    references: [
      {
        name: 'Jane Smith',
        title: 'Senior Software Engineer',
        company: 'TechCorp',
        contactInformation: 'janesmith@example.com, 987-654-3210'
      }
    ],
    security: {
      password: '',
      confirmPassword: ''
    },
    role : { data:'candidate'}
  });

  const submitresume = async () => {

    alert("lalala")
    // send file to server using fetch api
    const formData = new FormData()
    formData.append('file', resumefile as Blob)

    await fetch('http://localhost:3000/api/extract/', {
      method: 'POST',
      body: formData
    }).then(
      response => response.json()
    ).then(data => {
      const security = {
        password: '',
        confirmPassword: ''
      }
      // const role = 'candidate'
      data.message.security = security
      data.message.role = {data: 'candidate'}
      setResumeInformation(data.message)
      console.log(resumeInformation);
    })
  }

  const router = useRouter()

  const handleRegister = async () => {
    console.log(resumeInformation);
      try {
        // Make a POST request to your API route
        const response = await axios.post('/api/register', resumeInformation);
        console.log("Response data is: " , response.data);
        if (response.data.message === 'candidate Created.' || response.data.message === 'recruiter Created.') {
          // Handle success, e.g., show a success message
          console.log(response.data.message);
          router.push('/register/success')
        } else {
          // Handle error, e.g., show an error message
          console.error('Registration failed');
        }
      } catch (error) {
        console.error(error);
      }
  }



   
  return (
    <div className='flex h-screen w-screen'>

      {/* resume upload part */}
      <div className='w-1/4 border-2 border-r-[#e11d48] h-full p-10 flex flex-col justify-center items-center  gap-5'>
      
      <h1 className='text-2xl'>
        Upload Your Resume Here
      </h1>
      <div className="border-4 border-dashed border-red-400 flex items-center justify-center w-5/6">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                               Resume FIle
                            </p>
                          </div>
                          <input 
                                id="dropzone-file" 
                                type="file" 
                                className="hidden" 
                                onChange={(e) => setResumefile(e.target.files?.[0])}
                  
                          />
                        </label>
                </div>


              {/* upload resume  */}
              <button 
                className='bg-[#e11d48] h-[50px] w-[200px] text-white px-2 rounded-md m-10'
                onClick={submitresume}
              >
                Upload Resume
              </button>

              {/* Register button */}
              <button className='bg-black h-[50px] w-[200px] text-white px-2 rounded-md m-10
              ' onClick={handleRegister}
              >
                Register
              </button>
      </div>

      {/* form part */}

      <div className='flex flex-col w-3/4 p-10 pr-40 overflow-scroll'>


        {/* contact information */}
        <div className='flex border w-full border-zinc-100 mb-10 shadow-lg'>
          
          <div className='w-48 p-10 h-full border-r-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'>
            <h1 className='bold text-2xl font-bold text-white'>Contact Information</h1>
          </div>

          <div className='flex flex-col gap-10 p-10' >

              <div className='flex gap-4'>
            
                <Input 
                  placeholder="First Name" 
                  value={resumeInformation.contactInformation.firstName}
                  onChange={(e) => setResumeInformation({...resumeInformation, contactInformation: {...resumeInformation.contactInformation, firstName: e.target.value}})}
                  className='mb-5 w-52'
                />

                <Input 
                  placeholder="Last Name" 
                  value={resumeInformation.contactInformation.lastName}
                  onChange={(e) => setResumeInformation({...resumeInformation, contactInformation: {...resumeInformation.contactInformation, lastName: e.target.value}})}
                  className='mb-5 w-52'
                />
              
              </div>

              <div className='flex gap-4'>
                <Input 
                  placeholder="Phone" 
                  value={resumeInformation.contactInformation.phone}
                  onChange={(e) => setResumeInformation({...resumeInformation, contactInformation: {...resumeInformation.contactInformation, phone: e.target.value}})}
                  className='mb-5 w-52'
                />
                <Input 
                  placeholder="Email" 
                  value={resumeInformation.contactInformation.email}
                  onChange={(e) => setResumeInformation({...resumeInformation, contactInformation: {...resumeInformation.contactInformation, email: e.target.value}})}
                  className='mb-5 w-96'
                />
              </div>

              <Input 
                placeholder="Address" 
                value={resumeInformation.contactInformation.address}
                onChange={(e) => setResumeInformation({...resumeInformation, contactInformation: {...resumeInformation.contactInformation, address: e.target.value}})}
                className='mb-5'
              />
              
          </div>

        </div>

        {/* Summary */}
        <div className='flex border w-full border-zinc-100 mb-10  shadow-lg'>
          
          <div className='w-48 p-10 h-full border-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'> 
            <h1 className='bold text-2xl font-bold text-white'>Summary</h1>
          </div>

          <div className='flex flex-col gap-10 p-10 w-full' >
            
            <textarea 
              placeholder="Summary" 
              value={resumeInformation.summary}
              onChange={(e) => setResumeInformation({...resumeInformation, summary: e.target.value})}
              className='mb-5 w-full h-40 border-2 border-gray-500 p-10'
            />
                
          </div>

        </div>

        {/* Education */}
        <div className='flex border w-full border-zinc-100 mb-10  shadow-lg'>
          
          <div className='w-48 p-10 h-full border-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'> 
            <h1 className='bold text-2xl font-bold text-white'>Education</h1>
          </div>

          <div className='flex flex-col  mb-10 ' >

            {/* count number of education feilds and render that many inputs */}

            {
              resumeInformation.education.map((education, index) => {
                return (
                  <>
                    <div className='flex flex-col gap-4 p-10'>

                      <div className='flex gap-4'>

                        <Input 
                          placeholder="Degree" 
                          value={education.degree}
                          onChange={(e) => setResumeInformation({...resumeInformation, education: resumeInformation.education.map((item, i) => i === index ? {...item, degree: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />
                        <Input 
                          placeholder="School" 
                          value={education.school}
                          onChange={(e) => setResumeInformation({...resumeInformation, education: resumeInformation.education.map((item, i) => i === index ? {...item, school: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />
                        <Input 
                          placeholder="Major" 
                          value={education.major}
                          onChange={(e) => setResumeInformation({...resumeInformation, education: resumeInformation.education.map((item, i) => i === index ? {...item, major: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />

                      </div>

                      <div className='flex gap-4'>

                          <Input 
                            placeholder="Graduation Date" 
                            value={education.graduationDate}
                            onChange={(e) => setResumeInformation({...resumeInformation, education: resumeInformation.education.map((item, i) => i === index ? {...item, graduationDate: e.target.value} : item)})}
                            className='mb-5 w-52'
                          />
                          <Input 
                            placeholder="Aggrigate Marks" 
                            value={education.aggrigateMarks}
                            onChange={(e) => setResumeInformation({...resumeInformation, education: resumeInformation.education.map((item, i) => i === index ? {...item, aggrigateMarks: e.target.value} : item)})}
                            className='mb-5 w-52'
                          />

                          {/* delete button */}
                          <button onClick={() => setResumeInformation({...resumeInformation, education: resumeInformation.education.filter((item, i) => i !== index)})} className='bg-red-500 h-[30px] w-[30px] text-white px-2 rounded-full'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M7.615 20q-.69 0-1.152-.462Q6 19.075 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463h-8.77Zm2.193-3h1V8h-1v9Zm3.384 0h1V8h-1v9Z"/>
                          </svg>
                          </button>

                      </div>
                      
                      
                    </div>
                  </>
                )
              }
              )
            }
            
            {/* button to add education */}
            <button onClick={() => setResumeInformation({...resumeInformation, education: [...resumeInformation.education, {degree: '', school: '', major: '', graduationDate: '', aggrigateMarks: 0}]})} className='bg-black h-[50px] w-[150px] text-white px-2 rounded-md m-10 '>
              Add Education
            </button>

            </div>

        </div>
        
        {/* Work Experience */}

        <div className='flex border w-full border-zinc-100 mb-10  shadow-lg'>

          <div className='w-48 p-10 h-full border-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'> 
            <h1 className='bold text-2xl font-bold text-white'>Work Experience</h1>
          </div>

          <div className='flex flex-col gap-5'>

            {
              resumeInformation.workExperience.map((workExperience, index) => {
                return (
                  <>
                    <div className='flex flex-col gap-4 p-10'>

                      <div className='flex gap-4'>

                        <Input 
                          placeholder="Job Title" 
                          value={workExperience.jobTitle}
                          onChange={(e) => setResumeInformation({...resumeInformation, workExperience: resumeInformation.workExperience.map((item, i) => i === index ? {...item, jobTitle: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />
                        <Input 
                          placeholder="Company" 
                          value={workExperience.company}
                          onChange={(e) => setResumeInformation({...resumeInformation, workExperience: resumeInformation.workExperience.map((item, i) => i === index ? {...item, company: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />
                        <Input 
                          placeholder="Location" 
                          value={workExperience.location}
                          onChange={(e) => setResumeInformation({...resumeInformation, workExperience: resumeInformation.workExperience.map((item, i) => i === index ? {...item, location: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />

                      </div>

                      <div className='flex gap-4'>

                          <Input 
                            placeholder="Start Date" 
                            value={workExperience.startDate}
                            onChange={(e) => setResumeInformation({...resumeInformation, workExperience: resumeInformation.workExperience.map((item, i) => i === index ? {...item, startDate: e.target.value} : item)})}
                            className='mb-5 w-52'
                          />
                          <Input 
                            placeholder="End Date" 
                            value={workExperience.endDate}
                            onChange={(e) => setResumeInformation({...resumeInformation, workExperience: resumeInformation.workExperience.map((item, i) => i === index ? {...item, endDate: e.target.value} : item)})}
                            className='mb-5 w-52'
                          />

                      </div>

                      <Input 
                        placeholder="Description" 
                        value={workExperience.description}
                        onChange={(e) => setResumeInformation({...resumeInformation, workExperience: resumeInformation.workExperience.map((item, i) => i === index ? {...item, description: e.target.value} : item)})}
                        className='mb-5 w-96'
                      />
                      {/* delete button */}
                      <button onClick={() => setResumeInformation({...resumeInformation, workExperience: resumeInformation.workExperience.filter((item, i) => i !== index)})} className='bg-red-500 h-[30px] w-[30px] text-white px-2 rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M7.615 20q-.69 0-1.152-.462Q6 19.075 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463h-8.77Zm2.193-3h1V8h-1v9Zm3.384 0h1V8h-1v9Z"/>
                      </svg>
                      </button>
                    </div>
                    
                  </>
                )
              }
              )
            }

            {/* button to add work experience */}
            <button onClick={() => setResumeInformation({...resumeInformation, workExperience: [...resumeInformation.workExperience, {jobTitle: '', company: '', location: '', startDate: '', endDate: '', description: ''}]})} className='bg-black h-[50px] w-[200px] text-white px-2 rounded-md m-10'>
              Add Work Experience
            </button>

          </div>


        </div>

        {/* skills */}

        <div className='flex border w-full border-zinc-100 mb-10  shadow-lg'>

            <div className='w-48 p-10 h-full border-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'> 
              <h1 className='bold text-2xl font-bold text-white'> Skillssets</h1>
            </div>

            <div className='flex flex-col w-auto p-10'>

            <div className='flex flex-wrap gap-10 mb-10 '>
              
              {/* small card with delete button for skills */}
              {
                resumeInformation.skills.map((skill, index) => {
                  return (
                    <>
                    <div className='flex justify-center items-center gap-4'>
                      <Input 
                        placeholder="Skill" 
                        value={skill}
                        onChange={(e) => setResumeInformation({...resumeInformation, skills: resumeInformation.skills.map((item, i) => i === index ? e.target.value : item)})}
                        className='mb-5 w-52'
                      />

                      <button onClick={() => setResumeInformation({...resumeInformation, skills: resumeInformation.skills.filter((item, i) => i !== index)})} className='bg-red-500 h-[30px] w-[30px]  text-white px-2 rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M7.615 20q-.69 0-1.152-.462Q6 19.075 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463h-8.77Zm2.193-3h1V8h-1v9Zm3.384 0h1V8h-1v9Z"/>
                      </svg>
                      </button>

                    

                    </div>
                    </>
                  )
                })
              }

            </div>


                      {/* button to add skill */}
                      <button onClick={() => setResumeInformation({...resumeInformation, skills: [...resumeInformation.skills, '']})} className='bg-black h-[40px] w-[100px]  text-white px-2 rounded-md'>
                        Add Skill
                      </button>

            </div>

            

        </div>

        {/* certifications */}

        <div className='flex border w-full border-zinc-100 mb-10  shadow-lg'>

            <div className='w-48 p-10 h-full border-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'> 
              <h1 className='bold text-2xl font-bold text-white'>Certifications</h1>
            </div>

            <div className='flex flex-col p-10'>

              {
                resumeInformation.certifications.map((certification, index) => {
                  return (
                    <>
                    <div className='flex flex-col gap-4 p-10'>

                      <div className='flex gap-4'>

                        <Input 
                          placeholder="Name" 
                          value={certification.name}
                          onChange={(e) => setResumeInformation({...resumeInformation, certifications: resumeInformation.certifications.map((item, i) => i === index ? {...item, name: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />
                        <Input 
                          placeholder="Issuing Organization" 
                          value={certification.issuingOrganization}
                          onChange={(e) => setResumeInformation({...resumeInformation, certifications: resumeInformation.certifications.map((item, i) => i === index ? {...item, issuingOrganization: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />
                        <Input 
                          placeholder="Issued Date" 
                          value={certification.issuedDate}
                          onChange={(e) => setResumeInformation({...resumeInformation, certifications: resumeInformation.certifications.map((item, i) => i === index ? {...item, issuedDate: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />

                      </div>

                      <div className='flex gap-4'>

                          <Input 
                            placeholder="Expiry Date" 
                            value={certification.expiryDate}
                            onChange={(e) => setResumeInformation({...resumeInformation, certifications: resumeInformation.certifications.map((item, i) => i === index ? {...item, expiryDate: e.target.value} : item)})}
                            className='mb-5 w-52'
                          />

                          {/* delete button */}
                          <button onClick={() => setResumeInformation({...resumeInformation, certifications: resumeInformation.certifications.filter((item, i) => i !== index)})} className='bg-red-500 h-[30px] w-[30px] text-white px-2 rounded-full'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M7.615 20q-.69 0-1.152-.462Q6 19.075 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463h-8.77Zm2.193-3h1V8h-1v9Zm3.384 0h1V8h-1v9Z"/>
                          </svg>
                          </button>

                      </div>
                    </div>
                    </>
                  )
                })
              }

              {/* add certificate  */}
              <button onClick={() => setResumeInformation({...resumeInformation, certifications: [...resumeInformation.certifications, {name: '', issuingOrganization: '', issuedDate: '', expiryDate: ''}]})} className='bg-black h-[50px] w-[200px] text-white px-2 rounded-md m-10'>
                Add Certification
              </button>


            </div>

        </div>  

        {/* projects */}
        <div className='flex border w-full border-zinc-100 mb-10  shadow-lg'>

            <div className='w-48 p-10 h-full border-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'> 
              <h1 className='bold text-2xl font-bold text-white'>Projects</h1>
            </div>

            <div className='flex flex-col gap-4 p-10'>

              {
                resumeInformation.projects.map((project, index) => {
                  return (
                    <>
                    <div className='flex gap-4 p-5'>

                      <div className='flex gap-4'>

                        <Input 
                          placeholder="Title" 
                          value={project.title}
                          onChange={(e) => setResumeInformation({...resumeInformation, projects: resumeInformation.projects.map((item, i) => i === index ? {...item, title: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />
                        <Input 
                          placeholder="Date" 
                          value={project.date}
                          onChange={(e) => setResumeInformation({...resumeInformation, projects: resumeInformation.projects.map((item, i) => i === index ? {...item, date: e.target.value} : item)})}
                          className='mb-5 w-52'
                        />

                      </div>

                      <Input 
                        placeholder="Description" 
                        value={project.description}
                        onChange={(e) => setResumeInformation({...resumeInformation, projects: resumeInformation.projects.map((item, i) => i === index ? {...item, description: e.target.value} : item)})}
                        className='mb-5 w-96'
                      />
                        
                        {/* delete button */}
                          <button onClick={() => setResumeInformation({...resumeInformation, projects: resumeInformation.projects.filter((item, i) => i !== index)})} className='bg-red-500 h-[30px] w-[30px] text-white px-2 rounded-full'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M7.615 20q-.69 0-1.152-.462Q6 19.075 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463h-8.77Zm2.193-3h1V8h-1v9Zm3.384 0h1V8h-1v9Z"/>
                          </svg>
                          </button>
                        
                    </div>
                    </>
                  )
                })
              }

              {/* add project */}

              <button onClick={() => setResumeInformation({...resumeInformation, projects: [...resumeInformation.projects, {title: '', date: '', description: ''}]})} className='bg-black h-[50px] w-[200px] text-white px-2 rounded-md m-10'>
                Add Project
              </button>

            </div>
        </div>

        {/* achievements */}
        <div className='flex border w-full border-zinc-100 mb-10  shadow-lg'>

          <div className='w-48 p-10 h-full border-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'> 
            <h1 className='bold text-2xl font-bold text-white'>Achievements</h1>
          </div>

          <div className='flex flex-col gap-4 p-10'>

            {
              resumeInformation.achievements.map((achievement, index) => {
                return (
                  <>
                  <div className='flex gap-4 p-5'>

                    <div className='flex gap-4'>

                      <Input 
                        placeholder="Title" 
                        value={achievement.title}
                        onChange={(e) => setResumeInformation({...resumeInformation, achievements: resumeInformation.achievements.map((item, i) => i === index ? {...item, title: e.target.value} : item)})}
                        className='mb-5 w-52'
                      />
                      <Input 
                        placeholder="Date" 
                        value={achievement.date}
                        onChange={(e) => setResumeInformation({...resumeInformation, achievements: resumeInformation.achievements.map((item, i) => i === index ? {...item, date: e.target.value} : item)})}
                        className='mb-5 w-52'
                      />

                      {/* delete achivement */}

                      <button onClick={() => setResumeInformation({...resumeInformation, achievements: resumeInformation.achievements.filter((item, i) => i !== index)})} className='bg-red-500 h-[30px] w-[30px] text-white px-2 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.615 20q-.69 0-1.152-.462Q6 19.075 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463h-8.77Zm2.193-3h1V8h-1v9Zm3.384 0h1V8h-1v9Z"/>
                        </svg>
                      </button>

                    </div>
                  </div>
                  </>
                )
              })
            }
              
              {/* add achievement */}
              <button onClick={() => setResumeInformation({...resumeInformation, achievements: [...resumeInformation.achievements, {title: '', date: ''}]})} className='bg-black h-[50px] w-[200px] text-white px-2 rounded-md m-10'>
                Add Achievement
              </button>    

          </div>

        </div>

        {/* security  */}
        <div className='flex border w-full border-zinc-100 mb-10  shadow-lg'>

          <div className='w-48 p-10 h-full border-zinc-100 border-2 mb-10 flex justify-center items-center bg-zinc-700'> 
            <h1 className='bold text-2xl font-bold text-white'>Security</h1>
          </div>

          <div className='flex flex-col gap-4 p-10'>

            <div className='flex gap-4'>

              <Input 
                placeholder="Password" 
                value={resumeInformation.security.password}
                onChange={(e) => setResumeInformation({...resumeInformation, security: {...resumeInformation.security, password: e.target.value}})}
                className='mb-5 w-52'
              />
              <Input 
                placeholder="Confirm Password" 
                value={resumeInformation.security.confirmPassword}
                onChange={(e) => setResumeInformation({...resumeInformation, security: {...resumeInformation.security, confirmPassword: e.target.value}})}
                className='mb-5 w-52'
              />
            </div>

          </div>
        
        </div>
        
      </div>    
      
    </div>
  )
}

export default Register