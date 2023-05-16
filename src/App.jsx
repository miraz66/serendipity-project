import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBody from "./Components/MainBody";
import RightBody from "./Components/RightBody";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Pricing from "./Pages/Pricing";
import Updates from "./Pages/Updates";
import SingUp from "./Pages/SingUp";

function App() {
  return (
    <div className="bg-gradient-to-tl from-gray-950 to-indigo-900">
      <div className="flex max-w-6xl mx-auto overflow-hidden w-full">
        <div className="w-2/4 ">
          <RightBody />
        </div>
        <div className="w-2/4 flex ">
          <BrowserRouter>
            <MainBody>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/updates" element={<Updates />} />
              </Routes>
            </MainBody>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
