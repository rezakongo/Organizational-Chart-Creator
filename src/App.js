import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App_Body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
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
