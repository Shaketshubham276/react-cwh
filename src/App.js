import React, { useState } from "react";

import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Textutils Now"
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Night Mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type,
    });

    // setTimeout helps to set time interval for some time
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about"
            element={<About/>}>
            </Route>

            <Route path="/"
            element={<Textform
                heading="Enter the text to analyse"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
                />}>
                
              
            </Route>
          </Routes>

          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}
export default App;
