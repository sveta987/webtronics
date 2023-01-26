import React, {useEffect} from "react";

import Header from "./js/component/Header";
import Home from "./js/component/Home";
import About from "./js/component/About";
import Questions from "./js/component/Questions";
import Steps from "./js/component/Steps";
import Technologies from "./js/component/Technologies";
import Footer from "./js/component/Footer";
import ContactUs from "./js/component/ContactUs";
import Review from "./js/component/Review";
import Gallery from "./js/component/Gallery";
import NoPage from "./js/component/NoPage";
import {Route, Routes} from "react-router-dom";
import Landing from "./js/component/Landing";

function App() {
    return (
        <div className="App ">
            <Routes>
                <Route index path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/steps" element={<Steps />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
}

export default App;
