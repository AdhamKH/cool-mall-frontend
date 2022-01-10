import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Signup from './pages/signup';
import ReactDOM from "react-dom";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/"element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
       </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
