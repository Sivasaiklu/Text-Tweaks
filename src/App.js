import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("white mode enabled", "success");
      //document.title = "TextUtils - Light Mode";
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#0d0735';
      showAlert("dark mode enabled", "success");
      //document.title = "TextUtils - Dark Mode";
    }
  }

 

  return (

    <>
     <BrowserRouter>
    <NavBar title="TextTweaks" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/" element={<TextForm heading="Enter The Text To Analyze" mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>

   
      
    </BrowserRouter>
    
    </>
    

  );
}

export default App;
