import Image from "next/image"
import teamPic from "@/public/Image/pexels-canva-studio-3153201 1.png"
import clientPic from "@/public/Image/Intersect.png"
import personPic from "@/public/Image/Frame 3254.png"
import { useFormState } from "react-dom"
import logo from "@/public/logo.png"
import Footer from "@/components/Footer"

export default function name(params: any) {

  return (
    <div className="relative bg-white w-screen">
      <div className="relative w-screen md:p-10">
        <Image src={teamPic} objectFit="cover" alt="" className="md:relative h-96 blur-sm 
            md:blur-none md:w-2/4 md:left-2/4 md:gradient-to-l md:to-transparent md:h-80" />
        <div className="absolute top-0 bg-black bg-opacity-60 
          h-96 w-screen rounded-2xl flex flex-col pl-5 pt-5
          md:w-screen md:bg-gradient-to-r md:from-white md:to-transparent md:bg-transparent" >
          <div className="flex-grow flex flex-col gap-2">
            <h3 className="text-yellow-400 ">Tech Services</h3>
            <h1 className="text-4xl font-bold text-white md:text-black">TechSynergy: </h1>
            <h1 className="text-4xl font-bold text-white md:text-black">Innovate, </h1>
            <h1 className="text-4xl font-bold text-white md:text-black">Create, </h1>
            <h1 className="text-4xl font-bold text-white md:text-black">Elevate</h1>
            <h1 className="text-sm text-white">Unlocking Possibilities, One Code at a Time</h1>
          </div>
          <button className="bg-green-600 rounded-3xl w-3/6 md:w-2/6 py-1 mb-10">
            <h1 className="text-md text-white">See Projects</h1>
          </button>
        </div>
      </div>
      <div className="pt-10 px-3 pb-10 md:px-10 md:text-center">
        <h1 className="text-4xl rounded-3xl">We have multidisciplinary teams to meet any <span className="text-blue-600">challenge</span>.</h1>
        <div className="border-black rounded-3xl shadow-lg md:flex md:flex-row md:shadow-lg md:rounded-2xl md:p-10 md:gap-10">
          <div className="py-5 px-4 md:shadow-lg md:rounded-2xl">
            <h1 className="text-2xl">Front-end</h1>
            <p>Our frontend developers understand the delicate balance between aesthetics and functionality. </p>
          </div>
          <div className="pt-5 pb-5 pr-4 pl-4 md:shadow-lg md:rounded-2xl">
            <h1 className="text-2xl">Back-end</h1>
            <p>Our frontend developers understand the delicate balance between aesthetics and functionality. </p>
          </div>
          <div className="pt-5 pb-5 pr-4 pl-4 md:shadow-lg md:rounded-2xl">
            <h1 className="text-2xl">Data Analytics</h1>
            <p>Our frontend developers understand the delicate balance between aesthetics and functionality. </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:px-10">
        <h1 className="text-xl w-2/4 ml-28 pb-5 md:ml-0 md:px-10 text-center md:w-full md:text-4xl md:font-bold">Empowering Your Digital Vision: Our Comprehensive Tech Services.</h1>
        <div className="flex flex-row gap-4 overflow-scroll">
          <div className="pl-10 pr-10 pt-5 pb-5 rounded-3xl shadow-lg">
            <h1 className="text-xl pb-5 font-medium" >Custom Software Development</h1>
            <p>Create custom software tailored for your unique needs, including front-end, and core back-end technology.</p>
          </div>
          <div className="pl-10 pr-10 pt-5 pb-5 rounded-3xl shadow-lg">
            <h1 className="text-xl pb-5 font-medium">Custom Software Development</h1>
            <p>Create custom software tailored for your unique needs, including front-end, and core back-end technology.</p>
          </div>
          <div className="pl-10 pr-10 pt-5 pb-5 rounded-3xl shadow-lg">
            <h1 className="text-xl pb-5 font-medium">Custom Software Development</h1>
            <p>Create custom software tailored for your unique needs, including front-end, and core back-end technology.</p>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 pb-8 bg-blue-100 m-4 mt-8 rounded-3xl md:m-10">
        <h1 className="text-2xl pb-3">Trusted by Leading Organizations</h1>
        <p>Our 4,000+ team has expertise in almost everyprogramming language.</p>
        <div className="p-3 flex gap-4 flex-wrap justify-center">
          <h1 className="text-xl font-semibold text-gray-400">Samsung</h1>
          <h1 className="text-xl font-semibold text-gray-400">Microsoft</h1>
          <h1 className="text-xl font-semibold text-gray-400">Google</h1>
          <h1 className="text-xl font-semibold text-gray-400">Slack</h1>
          <h1 className="text-xl font-semibold text-gray-400">LG</h1>
          <h1 className="text-xl font-semibold text-gray-400">SONY</h1>
        </div>
        <button className="text-white p-2 pl-6 pr-6 bg-blue-700 rounded-3xl">
          <h2>Our full repertorie</h2>
        </button>
      </div>
      <div className="p-10 md:px-10 md:py-5 text-center">
        <Image src={clientPic} alt="" className="md:size-2/6 md:inline-block" />
        <div className="md:inline-block">
          <h1 className="text-2xl pb-5 pt-10">We've stopped counting. Over 500 brands count on us.</h1>
          <p>Our 4,000+ team has expertise in almost everyprogramming language.</p>
        </div>
      </div>
      <div className="w-screen relative md:bottom-40 md:px-10 ">
        <div className="flex overflow-scroll gap-5 bg-transparent h-64">
          <div className="min-w-full shadow-2xl px-5 bg-white rounded-2xl">
            <h1 className="text-xl font-semibold pb-5">"Exceptional Solutions, Exceeded Expectations!"</h1>
            <p className="text-sm">"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."</p>
            <hr />
            <h1 className="text-sm font-semibold">Mary Johnson</h1>
            <p className="text-sm">CEO of TechCraft Solutions</p>
          </div>
          <div className="min-w-full shadow-2xl px-5 bg-white rounded-2xl">
            <h1 className="text-xl font-semibold pb-5">"Exceptional Solutions, Exceeded Expectations!"</h1>
            <p className="text-sm">"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."</p>
            <hr />
            <h1 className="text-sm font-semibold">Mary Johnson</h1>
            <p className="text-sm">CEO of TechCraft Solutions</p>
          </div>
          <div className="min-w-full  shadow-2xl px-5 bg-white rounded-2xl">
            <h1 className="text-xl font-semibold pb-5">"Exceptional Solutions, Exceeded Expectations!"</h1>
            <p className="text-sm">"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."</p>
            <hr />
            <h1 className="text-sm font-semibold">Mary Johnson</h1>
            <p className="text-sm">CEO of TechCraft Solutions</p>
          </div>
          <div className="min-w-full  shadow-2xl px-5 bg-white rounded-2xl">
            <h1 className="text-xl font-semibold pb-5">"Exceptional Solutions, Exceeded Expectations!"</h1>
            <p className="text-sm">"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."</p>
            <hr />
            <h1 className="text-sm font-semibold">Mary Johnson</h1>
            <p className="text-sm">CEO of TechCraft Solutions</p>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-8 bg-blue-100 m-4 mt-8 md:mt-0 md:m-4 rounded-3xl">
        <h1 className="text-center text-2xl pb-3">Choose Us: Your Path to Innovation and <span className="text-blue-500">Success</span></h1>
        <p className="text-center ">Our 4,000+ team has expertise in almost everyprogramming language.</p>
        <div className="flex gap-4 justify-center overflow-scroll">
          <div className="min-ml-96 min-h-36 md:ml-0 min-w-56 shadow-2xl px-5 bg-white rounded-2xl">
            <h1 className="text-md font-semibold">Expertise Across the Tech Spectrum</h1>
            <p className="text-sm">Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.</p>
          </div>
          <div className="min-ml-96 min-h-36 md:ml-0 min-w-56 shadow-2xl px-5 bg-white rounded-2xl">
            <h1 className="text-md font-semibold">Expertise Across the Tech Spectrum</h1>
            <p className="text-sm">Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.</p>
          </div>
          <div className="min-ml-96 min-h-36 md:ml-0 min-w-56 shadow-2xl px-5 bg-white rounded-2xl">
            <h1 className="text-md font-semibold">Expertise Across the Tech Spectrum</h1>
            <p className="text-sm">Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.</p>
          </div>
          <div className="min-ml-96 min-h-36 md:ml-0 min-w-56 shadow-2xl px-5 bg-white rounded-2xl">
            <h1 className="text-md font-semibold">Expertise Across the Tech Spectrum</h1>
            <p className="text-sm">Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <Image src={personPic} alt="" width={150} height={150} />
        <Image src={personPic} alt="" width={150} height={150} />
        <Image src={personPic} alt="" width={150} height={150} />
        <Image src={personPic} alt="" width={150} height={150} />
        <Image src={personPic} alt="" width={150} height={150} />
      </div>
      <div className="flex flex-col items-center p-5">
        <h1 className="text-2xl pb-2">Let's Form Your Crew.</h1>
        <button className="bg-blue-600 px-6 py-2 rounded-3xl">
          <h2 className="text-white">Let's get started.</h2>
        </button>
      </div>
      <div className="py-16 px-8 bg-gradient-to-tr from-blue-300 to-blue-500 text-center m-10 rounded-2xl">
        <h1 className="text-3xl text-white font-semibold">Ready to Transform Your Vision into Reality? Let's Get Started!</h1>
        <button className="bg-white py-3 px-10 text-purple-600 rounded-3xl mt-5">
          <h1>Schedule a Call</h1>
        </button>
      </div>
    </div>
  )
}
