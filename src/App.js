import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import Login from './Components/Login/Login';
import CartPage from './Pages/CartPage/CartPage';
function App() {

  useEffect(() => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let el = document.querySelector(".scroller");
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      el.style.width =`${scrollTop / height * 100}%`
    })  
  },[])


  const [showLogin, setShowLogin] = useState(false);  

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin} />:<></>}
    <div className='scroller'></div>
    <div className="App container">
    
      <Router>
      <Routes>
        <Route path="*" element={<Home setShowLogin={setShowLogin} />} />
        <Route path='/place' element={<PlaceOrder/>} />
        <Route path='/cart' element={<CartPage setShowLogin={setShowLogin} />}/>
      </Routes>
      </Router>
    </div>
    <Footer />
    </>

  );
}

export default App;
