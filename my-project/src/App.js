import { Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home/index"
import {About} from "./pages/About/index"
import {Approvals} from "./pages/Approvals/index"
import {Blog} from "./pages/Blog/index"
import {Careers} from "./pages/Careers/index"
import {Contact} from "./pages/Contact/index"
import {Projects} from "./pages/Projects/index"
import {Services} from "./pages/Services/index"
function App() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Approvals" element={<Approvals/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/Careers" element={<Careers/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/Services" element={<Services/>}/>
  </Routes>
}

export default App;
