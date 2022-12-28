
import './App.css';
import Home from './home';
import Post from './post';
import Sign from './sign';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './signup';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Sign/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/register" element={<Signup/>}/>
   
   </Routes>



</BrowserRouter>

      
      



    </div>
  );
}

export default App;
