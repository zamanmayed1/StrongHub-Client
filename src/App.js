import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
      
     </Routes>
     <Footer/>

    </div>
  );
}

export default App;
