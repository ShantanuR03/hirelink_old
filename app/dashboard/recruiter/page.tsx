"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface JobOpening {
  id: string;
  title: string;
  location: string;
  summary: string;
  role: string;
  skills: string[];
  status: string;
  applicants: number;
  created_at: string;
}


interface candidate{
  name: string;
  skills: string[];
  experience: number;
  location: string;
  education: string;
  languages: string[];
  time: string;
}

const RecruiterDashbord = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const [jobOpenings, setJobOpenings] = React.useState<JobOpening[]>([


  ]);

  const [htmlData, setHtmlData] = React.useState("");

  const [selectedJob, setSelectedJob] = React.useState<JobOpening | null>(null);
  const handleCardClick = (jobOpening) => {
    setSelectedJob(jobOpening);
  };

  // dummy data for job openings
  const dummyJobOpenings: JobOpening[] = [
    {
      id: "1",
      title: "Software Developer",
      location: "Pune",
      summary:
        "We are looking for a software developer with 2 years of experience",
      role: "Full Time",
      skills: ["React", "Node", "MongoDB"],
      status: "Open",
      applicants: 3,
      created_at: "2021-09-01",
    },
    {
      id: "2",
      title: "Frontend Developer",
      location: "Bangalore",
      summary: "Exciting opportunity for a frontend developer to join our team",
      role: "Full Time",
      skills: ["JavaScript", "React", "HTML", "CSS"],
      status: "Open",
      applicants: 8,
      created_at: "2021-10-15",
    },
    {
      id: "3",
      title: "Data Scientist",
      location: "Mumbai",
      summary: "Join our data science team and work on cutting-edge projects",
      role: "Contract",
      skills: ["Python", "Machine Learning", "Statistics"],
      status: "Open",
      applicants: 5,
      created_at: "2021-11-20",
    },
    {
      id: "4",
      title: "Backend Engineer",
      location: "Hyderabad",
      summary: "We are hiring backend engineers to build scalable applications",
      role: "Full Time",
      skills: ["Java", "Spring Boot", "MySQL"],
      status: "Open",
      applicants: 12,
      created_at: "2021-12-05",
    },
    {
      id: "5",
      title: "UI/UX Designer",
      location: "Chennai",
      summary: "Join our design team and create stunning user interfaces",
      role: "Part Time",
      skills: ["Adobe XD", "Sketch", "Figma"],
      status: "Open",
      applicants: 6,
      created_at: "2022-01-10",
    },
  ];

  const dummyCandidates: candidate[] = [
    {
      name: "John Doe",
 
      skills: ["JavaScript", "React", "Node.js"],
      experience: 5,
      location: "pune",
      education: "Bachelor's in Computer Science",
      languages: ["English", "Spanish"],
      time: "full-time"
    },
    {
      name: "Jane Smith",
  
      skills: ["Python", "Django", "SQL"],
      experience: 4,
      location: "San Francisco",
      education: "Master's in Data Science",
      languages: ["English", "French"],
      time: "contract"
    },
    {
      name: "Alice Johnson",
   
      skills: ["Java", "Spring Boot", "MongoDB"],
      experience: 6,
      location: "London",
      education: "Bachelor's in Software Engineering",
      languages: ["English", "German"],
      time: "full-time"
    },
    // Add more dummy candidates as needed
  ];
  
  
    




  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCandidateClick = (candidate) => {
    console.log(candidate);

    const candistring = JSON.stringify(candidate);
    const jobstring = JSON.stringify(selectedJob);

    // Construct the prompt string
    const prompt =
    "This is candidate profile and job description. Please compare them and give creative and interesting summary of match between them in about 20 lines (pointwise). Use plain html for styling, not even CSS, compulsarily.Use html headings, bold text, breaks (NO MARKDOWN) and make the match profile interesting.In the end add simple 'MATCH SCORE' rating match out of 10.\n" +
    "candidate profile: " + candistring + "\n Job Description: " + jobstring;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };

  console.log(requestBody)

  const apiUrl =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBUyOFNeDzQtGJpLIYbIbuh2hAdDrWqyi8 ";

  fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const jsonData = data.candidates[0].content.parts[0].text;
      console.log(jsonData);
      setHtmlData(jsonData);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  

  return (
    <div className="w-screen h-auto flex flex-col bg-[#f5e8e8]">
      {/* Header */}
      <div className="bg-[#17191c] h-28 border-gray-100 border-b-[1px] py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={"/dark_logo.png"} width={50} height={50} alt={"Logo"} />
          <span className="text-xl text-white font-bold mr-4">HireLink</span>
        </div>
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="mr-4 text-white">Swapnil Kapale</span>
            <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="2">
                  <path
                    stroke-linejoin="round"
                    d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                  />
                  <circle cx="12" cy="7" r="3" />
                </g>
              </svg>
            </div>
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Employees
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Jobs
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Candidates
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Leaves
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#17191c] h-64 border-gray-100 border-b-4 py-4 px-6 flex flex-col">
        <h1 className="text-white text-xl pt-4">Hello Swapnil</h1>
        <div className="flex py-4 w-full justify-between">
          <h1 className="text-white font-bold text-3xl">Good Morning</h1>
          <button className="bg-[#e11d48] text-white px-3 rounded-md">
            Add Opening
          </button>
        </div>

        <div>
          <div className="flex justify-evenly gap-10 mt-10">
            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#efeafa] w-fit p-5 rounded-full m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"
                  />
                </svg>
              </div>
              <h1 className="text-black text-xl font-medium">Total Openings</h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">200</span>/200
              </p>
            </div>

            {/* 2nd card, for pending interviews */}

            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#cbf2f2] w-fit p-5 rounded-full m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 14 14"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.5 1h-5v5h5zm7.75 12.5h-5m0-5h5m-5 2.5h5m.25-5H8L10.75.5zM3 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                  />
                </svg>
              </div>
              <h1 className="text-black text-xl font-medium">
                Pending Interviews
              </h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">12</span>/200
              </p>
            </div>

            {/* 3rd card, for pending offers */}

            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#e5ede6] w-fit p-5 rounded-full m-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 2048 2048">
                  <path fill="currentColor" d="m1902 196l121 120L683 1657L25 999l121-121l537 537L1902 196z"/>
              </svg>
              </div>
              <h1 className="text-black text-xl font-medium">Accepted Offers</h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">15</span>/200
              </p>
            </div>

            {/* 4th card, for pending offers */}
            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#ffede2] w-fit p-5 rounded-full m-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m17.4 12.308l-.708-.708l2.095-2.1l-2.095-2.075l.708-.713l2.1 2.1l2.075-2.1l.713.713l-2.08 2.075l2.08 2.1l-.713.708l-2.075-2.075l-2.1 2.075ZM9 11.385q-1.237 0-2.119-.882T6 8.385q0-1.238.881-2.12q.881-.88 2.119-.88t2.119.88q.881.882.881 2.12q0 1.237-.881 2.118T9 11.385Zm-7 7.23V16.97q0-.619.36-1.158q.361-.54.97-.838q1.416-.679 2.833-1.018q1.418-.34 2.837-.34q1.42 0 2.837.34q1.417.34 2.832 1.018q.61.298.97.838q.361.539.361 1.158v1.646H2Zm1-1h12v-.646q0-.332-.214-.625q-.215-.292-.594-.494q-1.234-.598-2.546-.916q-1.31-.319-2.646-.319q-1.335 0-2.646.319q-1.312.318-2.546.916q-.38.202-.594.494Q3 16.637 3 16.97v.646Zm6-7.23q.825 0 1.413-.588T11 8.385q0-.825-.588-1.413T9 6.385q-.825 0-1.413.587T7 8.385q0 .825.588 1.412T9 10.385Zm0-2Zm0 9.23Z"/>
              </svg>
              </div>
              <h1 className="text-black text-xl font-medium">Rejected Offers</h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">15</span>/200
              </p>
            </div>

            {/* 5th card, for pending offers */}

            <div className="bg-[#f7f7f7] h-auto w-1/6  rounded-3xl p-6 flex flex-col gap-y-3">
              <div className="bg-[#efeafa] w-fit p-5 rounded-full m-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18Zm11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-9.996 1.004H11V11h2.004v2.004Zm-5 0H6V11h2.004v2.004Zm10 0H16V11h2.004v2.004Z"/>
              </svg>
              </div>
              <h1 className="text-black text-xl font-medium">Pending Offers</h1>
              <p className="text-xl font-light">
                <span className="font-semibold text-3xl">15</span>/200
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* load created job opening cards
       */}

      <div className="flex mt-52 mx-10 gap-x-4 justify-center items-center">
        <div className="flex flex-col justify-between p-10 w-1/4 gap-y-5 overflow-scroll max-h-[1000px]">
          {dummyJobOpenings.map((jobOpening) => (
            <div
              key={jobOpening.id} // Adding a unique key for each card
              className="bg-white p-4 rounded-xl mb-4 w-full md:mr-4 relative"
              onClick={() => handleCardClick(jobOpening)} // Call handleCardClick function on click
              style={{ cursor: "pointer" }} // Add cursor pointer to indicate clickability
            >
              <div className="absolute -top-4 left-4">
                <div className="w-12 h-12 rounded-full bg-[#e11d48] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {jobOpening.applicants}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2 mt-6">
                Match Candidate
              </p>
              <h1 className="text-xl font-normal">{jobOpening.title}</h1>

              <div className="flex gap-4">
                <p className="text-sm text-gray-400 mb-2 mt-6">
                  {jobOpening.location}
                </p>
                <p className="text-sm text-gray-400 mb-2 mt-6">
                  {jobOpening.role}
                </p>
                <p className="text-sm text-gray-400 mb-2 mt-6">
                  {jobOpening.created_at}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-3/4 bg-white rounded-xl shadow-xl p-5 m-6 ">
          {/* Show details of selected job opening instead of hardcoding*/}
          <div className="flex flex-col gap-y-5 w-full">
            
            <div className="flex gap-x-4 ">
              <div className="job-details w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
                <h1 className="text-3xl font-semibold mb-6 text-gray-800 px-6 py-4 bg-gray-100 border-b border-gray-200">
                  Job Details
                </h1>

                <div className="grid grid-cols-2 gap-8 px-6 py-8">
                  <div>
                <h1 className="text-2xl mb-4 font-semibold">{selectedJob?.title}</h1>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Location
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      {selectedJob?.location}
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6">
                      Role
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      {selectedJob?.role}
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6">
                      Status
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      {selectedJob?.status}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Skills
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      {selectedJob?.skills.join(", ")}
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6">
                      Applicants
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      {selectedJob?.applicants}
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6">
                      Created At
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                      {selectedJob?.created_at}
                    </p>
                  </div>
                </div>

              </div>

              <div className="mx-3 w-1/2  rounded-2xl bg-slate-200">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 px-6 py-4 bg-gray-100 border-b border-gray-200 rounded-2xl">
                  AI Match Summary
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: htmlData }} className="p-4 "
                ></div>
              </div>
              
            </div>


            <div className="bg-white py-10">
              <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                  <h2 className="text-3xl mb-10 font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Potential Matches
                  </h2>
                </div>
              </div>
                <ul
                  role="list"
                  className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 "
                >
                  {
                    dummyCandidates.map((candidate) => (

                      <>

                          <li key={candidate.name} onClick={() => handleCandidateClick(candidate)} className="hover:cursor-pointer">
                            <div className="flex h-48  items-center gap-x-6 bg-slate-100 p-4 rounded-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 6.39A9.973 9.973 0 0 0 17.42 10c.78 0 1.53-.09 2.25-.26c.21.71.33 1.47.33 2.26c0 4.41-3.59 8-8 8c-3 0-5.61-1.66-7-4.11L6.75 14v-1A1.25 1.25 0 0 1 8 11.75A1.25 1.25 0 0 1 9.25 13v1H12m4-2.25A1.25 1.25 0 0 0 14.75 13A1.25 1.25 0 0 0 16 14.25A1.25 1.25 0 0 0 17.25 13A1.25 1.25 0 0 0 16 11.75Z"
                                />
                              </svg>
                              <div>
                                <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                                  {candidate.name}
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-slate-600">
                                  Experience: {candidate.experience} Years
                                </p>
                                <p className="text-sm font-semibold leading-6 text-slate-600">
                                  Location: {candidate.location}
                                </p>
                                <p className="text-sm font-semibold leading-6 text-slate-600">
                                  Education: {candidate.education}
                                </p>
                                <p className="text-sm font-semibold leading-6 text-slate-600">
                                  Languages: {candidate.languages.join(", ")}
                                </p>

                              </div>
                            </div>
                          </li>

                      </>
                    ))
                  }

                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashbord;