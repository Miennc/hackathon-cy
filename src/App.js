import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddArticles from './components/AddArticles';
import Details from './components/Details';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
        
          </Route>
          <Route path="/login" element={<Login />} >
        
          </Route>
          <Route path="/signup" element={<Signup/>} >
        
          </Route>
          <Route path="/articles" element={<AddArticles/>} >
        
          </Route>
          <Route path="/details" element={<Details/>} >
        
        </Route>
        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>

    </div>
  )
}
