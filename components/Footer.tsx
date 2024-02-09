import logo from "@/public/logo.png"
import Image from "next/image";
import { TextField } from "@mui/material"

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap p-10">
        <ul className="list-none w-1/2">
          <li className="">Information</li>
          <li className="text-gray-500">FAQ</li>
          <li className="text-gray-500">Blog</li>
          <li className="text-gray-500">Support</li>
        </ul>
        <ul className="list-none w-1/2">
          <li className="">Company</li>
          <li className="text-gray-500">About Us</li>
          <li className="text-gray-500">Careers</li>
          <li className="text-gray-500">Contact Us</li>
          <li className="text-gray-500">Lift Media</li>
        </ul>
        <ul className="list-none" >
          <li className="">Product</li>
          <li className="text-gray-500">Employee database</li>
          <li className="text-gray-500">Payroll</li>
          <li className="text-gray-500">Absences</li>
          <li className="text-gray-500">Time Tracking</li>
          <li className="text-gray-500">Shift Planner</li>
          <li className="text-gray-500">Recruiting</li>
        </ul>
      </div>
      <div className="m-5 bg-blue-100 p-8 rounded-2xl flex flex-col gap-3">
        <h1>Subscribe</h1>
        <div className="bg-white rounded-3xl w-full">
          <TextField label="email" className="rounded-3xl inline-block w-4/5" />
          <button className="inline-block rounded-full bg-blue-700 text-white w-12 h-14 text-2xl">-{'>'}</button>
        </div>
        <p className="text-sm text-gray-500">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
      </div>
      <div className="p-8 flex flex-col gap-5">
        <hr />
        <div className="flex flex-row gap-5">
          <button className="border-black border rounded-3xl h-8 w-8">
            <h1 className="font-medium">in</h1>
          </button>
          <button className="border-black border rounded-3xl h-8 w-8">
            <h1 className="font-medium">f</h1>
          </button>
          <button className="border-black border rounded-3xl h-8 w-8">
            <h1 className="font-medium">X</h1>
          </button>
        </div>
        <div className="flex flex-row justify-between items-center">
          <Image src={logo} alt="" width={50} height={50} />
          <ul className="flex flex-row gap-5">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Footer;
