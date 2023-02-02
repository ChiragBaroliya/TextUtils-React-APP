import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

function App() {

 const[mode, setMode] = useState("light");
  const[alert,setAlert] = useState(null);

 const showAlert = (message, type) => {
  setAlert({msg:message, type:type});
  setTimeout(() =>{
    setAlert(null)
  }, 3000);
 }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor ="grey";
      showAlert("Dark  mode has been enabled", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor ="white";
      showAlert("Light  mode has been enabled", "success");
    }
  }

  return (
    <>
    <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <div className='container'>
          
          
            <Routes>
                <Route exact path="/about" element={<About mode={mode} />}>
                </Route>
                <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below"  />}>
                </Route>
            </Routes>
          
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
