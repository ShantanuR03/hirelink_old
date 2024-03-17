
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ModeToggle } from "@/components/ui/modetoggle";


export default function Home() {
  return (
    <div className="h-screen w-screen">

      {/* topbar */}
      <div className="h-[10vh] w-screen flex  items-center justify-between p-10 pt-20">
          <div className="flex gap-2 justify-center items-center">
          
          <Image
            src="/dark_logo.png"
            alt="mentorship"
            width={74}
            height={74}
            className="light:hidden"
          />

          <Image
            src="/logo.png"
            alt="mentorship"
            width={74}
            height={74}
            className="dark:hidden"
          />
            <h1 className="text-5xl font-bold">
              HireLink
            </h1>
          </div>
        <div className="flex gap-4 pr-38">
          <Button  className="w-52 h-12 text-lg border-black mr-40"><Link href="/signin">Sign In</Link></Button>
        </div>
    
      </div>

      {/* main */}
      <div className="h-[90vh] w-screen flex justify-center items-center pl-20">
        <div className="h-full w-1/2 flex flex-col items-left justify-center p-5 gap-5">
          <h1 className="text-7xl font-bold"> 
          Connecting Talent  <br /> with → Opportunity<br />One Link at a Time 
          </h1>
          <p className="text-[1.5rem]">
            HireLink is a platform that connects you with the right opportunities. 
            We help you find the right mentorship, internship, and job opportunities. 
            We also help you connect with the right people to help you grow your career.
          </p>

          <Button variant={"outline"} className="border-black border-2 text-lg w-52 h-12 mt-5"><Link href="/register">Get started</Link></Button>
         

        </div>
        <div className="h-full w-1/2 flex items-center justify-center">
          <Image
            src="/hero.png"
            alt="mentorship"
            width={600}
            height={600}
            className="mb-20"
          />
        </div>

      </div>

    </div>
  );
}
