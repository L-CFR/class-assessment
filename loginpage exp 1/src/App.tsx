import { Routes, Route } from "react-router-dom";
import './App.css'
import { Signin } from './components/signin';
import { Signup } from './components/signup';
import Home from "./components/home";
function App() {
  
  return <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
}

export default App
