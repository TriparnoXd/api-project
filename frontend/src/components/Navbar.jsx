import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="h-36 w-vh p-4">
        <div className="relative group">
            <div id="bg-blur-effect" className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-zinc-900 to-purple-600 w-11/12 m-auto rounded-lg blur-xl opacity-75 group-hover:opacity-100  group-hover:w-full duration-500 group-hover:brightness-200 "></div>
            <div id="navbar" className="relative bg-[url('/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai.jpg')] bg-right-bottom bg-cover h-16 w-11/12 m-auto rounded-xl font-body flex justify-between text-2xl font-bold text-slate-200 p-4  brightness-100 group-hover:w-full duration-500 group-hover:h-20 ease-in-out">
                <div id="start" className="flex gap-3">
                    <img src="/download.svg" alt="" className="max-w-6 max-h-6 mt-1 group-hover:max-w-7 group-hover:max-h-7 group-hover:mt-2 duration-500"/>
                    <Link to="/">
                        <h1 className="text-sky-400 group-hover:text-yellow-400 group-hover:pt-2 duration-500 ease-in-out cursor-pointer">Bhagwad Gita</h1>
                    </Link>
                    
                </div>
                
                <ul className="flex gap-x-8 px-4 cursor-pointer">
                    <Link to="/chapters">
                        <li className="text-sky-400 group-hover:text-yellow-400  group-hover:pt-2 duration-500 ease-in-out">Chapters</li>
                    </Link>
                    <Link to="/shlok">
                        <li className="text-sky-400 group-hover:text-yellow-400 group-hover:pt-2 duration-500 ease-in-out">Shlok</li>
                    </Link>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}
 