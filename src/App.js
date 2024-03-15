import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HomeNavbar from "./Components/Navbar/Navbar"
import OrgChart from "./Pages/OrgChart/OrgChart";
import AboutUs from "./Pages/AboutUs/AboutUs";
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeNavbar/>
      <div className="App_Body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/OrgChart" element={<OrgChart/>}/>
            <Route path="/about_us" element={<AboutUs/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <div className="App_Footer">
          Footer
      </div>
    </div>
  );
}

export default App;
