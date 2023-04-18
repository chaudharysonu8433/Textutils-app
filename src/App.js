import { useState } from 'react';
import './App.css';
import NavBar from './my components/NavBar';
import About from './my components/about';
import TextForm from './my components/TextForm';
import Alert from './my components/alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
const [mode,setMode] = useState('light'); 
const [alert, setAlert] = useState(null)

const showAlert = (message,type) => {
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  },1500);
}
const toggleMode=() => {
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor= '#01122c';
    showAlert("Dark mode has been enabled","Success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode has been enabled" , "Success");
  }
}
  return (
  <>
  <BrowserRouter>
  <NavBar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
<Routes>
      <Route path="/about" element={<About mode={mode}/>}/>
      <Route path="/" element= {<TextForm heading="Enter your Text Below" mode={mode} showAlert={showAlert}/>} /> 
  </Routes>
  </div>      
</BrowserRouter>
  </>
  );
}

export default App;