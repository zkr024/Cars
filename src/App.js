import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Access from './components/Access';
import FrontPage from './components/frontPage/FrontPage';
import Car from './components/details/Car';
import AllCars from './components/car/AllCars';
import Home from './components/Home';
import NavCars from './shared/navCars';
import User from './components/users/User';
import Login from './components/users/Login';

function App() {
  const [objAuth, setAuthenticated] = useState({ authenticated: false });
  const handleCallback = (authValue) => {
    setAuthenticated({ authenticated: authValue });
  };
  return (
    <div className="app">
      <>
        <div className="frame">
          <NavCars classType={(objAuth.authenticated) ? 'nav-visible' : 'nav-hidden'} />
          <Routes>
            <Route path="/" element={<Login handleClick={handleCallback} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/access" element={<Access />} />
            <Route path="/users/:userId" element={<FrontPage />} />
            <Route path="/users/:userId/cars" element={<AllCars />} />
            <Route path="/users/:userId/cars/:carId" element={<Car />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
