import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainBody from "./Components/MainBody";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import Pricing from "./Pages/Pricing";
import Updates from "./Pages/Updates";
import SingUp from "./Pages/SingUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainBody>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/updates" element={<Updates />} />

            <Route path="/singup" element={<SingUp />} />
          </Routes>
        </MainBody>
      </BrowserRouter>
    </>
  );
}

export default App;
