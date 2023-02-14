import './App.css';
import { RouterProvider } from 'react-router-dom';
import {routes} from "./router"
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './pages/home/Home';
import Layout from "./layouts/RootLayOuts.jsx"
import { useState } from 'react';
import Protected from './routes/protected';
import Cart from './pages/Cart/Cart';

function App() {
  const [login,setLogin]=useState(false);

  return (
    <Routes>
      <Route path='/' element={<Login setLogin={setLogin}/>}/>
      <Route element={<Protected login={login}/>}>
        <Route element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Route>
    </Routes>
  );
}


export default App;
