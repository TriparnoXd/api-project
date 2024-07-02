
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chapter from "./components/Chapter"
import Shlok from "./components/Shlok"

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chapters" element={<Chapter/>} />
        <Route path="/shlok" element={<Shlok />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
