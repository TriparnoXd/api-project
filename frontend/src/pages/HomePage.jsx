import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="bg-slate-900 min-h-screen m-0 p-0 border-box overflow-y-scroll no-scrollbar">
      
      <Navbar />
      <Header/>
      <Footer/> 
    </div>
  )
}
