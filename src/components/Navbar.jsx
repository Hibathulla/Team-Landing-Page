import { useState } from "react"
import {HiMenuAlt1} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className=" absolute z-10 flex h-24 items-center w-full mx-auto px-4 text-white">
            <h1 className="text-3xl mr-auto font-bold">TEAM</h1>
            <ul className="hidden sm:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>

            <div className="cursor-pointer block sm:hidden" onClick={() => setOpen(!open)}>
               {open ? <AiOutlineClose size={20} /> : <HiMenuAlt1 size={20} />}
            </div>

            <div className={`ease-in-out duration-500 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[black] ${open ? "fixed left-0" : "fixed left-[-100%]"}`}>
            <h1 className="text-3xl m-4 font-bold text-[#08df9a]">REACT</h1>
            <ul onClick={() => setOpen(!open)} className="pt-12 uppercase">
                <li className="p-3 border-b border-gray-600">Home</li>
                <li className="p-3 border-b border-gray-600">Company</li>
                <li className="p-3 border-b border-gray-600">Resources</li>
                <li className="p-3 border-b border-gray-600">About</li>
                <li className="p-3">Contact</li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar