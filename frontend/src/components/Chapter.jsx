import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"
import ChapterCard from "./ChapterCard"
import Footer from "./Footer"

export default function Chapter() {
    const [chapters, setChapters] = useState([])

    const getChapter = () => {
        axios.get("/bhagwadgita")
        .then((response)=>{
            const getData = response.data;
            setChapters(getData);
        })
    }

  useEffect(()=>getChapter(),[]);
  return (
    <>
    
    <div className="bg-slate-900 min-h-screen m-0 p-0 border-box text-slate-50"> 
        <Navbar />
        {/* {chapters.map((value)=>(
            <h1 key={value.chapter_number}>{value.translation}</h1>
        ))} */}

        <div className="flex flex-col h-full max-w-11/12">
            <div id="heading" className="bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 inline-block text-transparent bg-clip-text">
                <h1 className="text-5xl font-body font-bold ml-16 cursor-pointer">Chapters</h1>
            </div>
            <div id="chapters" className="ml-16 flex flex-row flex-wrap">
                {chapters.map((value)=>(
                    <NavLink key={value.chapter_number} to="">
                        <ChapterCard  content={value} />
                    </NavLink>
                    
                ))}
            </div>
        </div>
        <Footer />
    </div>
    
    </>
  )
}
