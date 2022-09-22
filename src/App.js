import './App.css';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import 'font-awesome/css/font-awesome.min.css'

function App() {
  
  return (
    <div>
      <div>        
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
