import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="h-full w-5/6 m-auto">
        <div className="h-[800px] bg-[url('gita-pic-3.jpeg')] bg-cover bg-center rounded-2xl flex justify-center items-center flex-col font-bold font-body m-4">
            <h1 className="text-slate-50 text-8xl m-4">BHAGWAD GITA</h1>
            <Link to="/chapters" >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 p-4 rounded-2xl text-gray-800 m-2 hover:text-5xl duration-500 ease-in-out">Read Anytime Anywhere</h1>
            </Link>
        </div>
    </div>
  )
}
