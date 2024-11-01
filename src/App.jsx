import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';  
import ManageStaf from './pages/Manage';
import HireStaf from './pages/HireStaf';
import CareerTv from './pages/CareerTv';
import FindJobs from './pages/FindJobs';
import Pricing from './pages/Pricing';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/hirestaf" element={<HireStaf />} /> 
        <Route path="/managestaf" element={<ManageStaf />} /> 
        <Route path="/careerTv" element={<CareerTv />} /> 
        <Route path="/findJobs" element={<FindJobs />} /> 
        <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/signin" element={<Signin />} /> 
        
       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
