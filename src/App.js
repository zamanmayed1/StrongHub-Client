import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Products from './Pages/Products/Products';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <div className="max-w-7xl mx-auto bg-base-100">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/blogs' element={<Blog />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
