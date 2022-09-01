import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FrontPage from './components/car/frontPage/FrontPage';
import Car from './components/car/details/Car';
import AllCars from './components/car/AllCars';
import DeleteCar from './components/car/DeleteCars';
import NavCars from './shared/navCars';
import User from './components/users/User';
import Login from './components/users/Login';
import Appointment from './components/appointments/Appointment';
import AppointmentsList from './components/appointments/AppointmentsList';

import Logout from './components/users/Logout';
import './assets/style.css';

function App() {
  const [objAuth, setAuthenticated] = useState({ authenticated: false });
  const handleCallback = (authValue) => {
    setAuthenticated({ authenticated: authValue });
  };

  const user = localStorage.getItem('user_id');

  useEffect(() => {
    if (user === null) {
      setAuthenticated({ authenticated: false });
    } else {
      setAuthenticated({ authenticated: true });
    }
  }, []);

  return (
    <div className="app">
      <>
        <div className="routes">
          <NavCars authenticated={objAuth.authenticated} />
          <Routes>
            <Route path="/" element={<Login handleClick={handleCallback} />} />
            <Route path="/logout" element={<Logout handleClick={handleCallback} />} />
            <Route path="/user" element={<User />} />
            <Route path="/users/:userId/list" element={<FrontPage />} />
            <Route path="/users/:userId/cars/add" element={<AllCars />} />
            <Route path="/users/:userId/cars/delete" element={<DeleteCar />} />
            <Route path="/users/:userId/cars/:carId" element={<Car />} />
            <Route path="/users/:userId/appointments" element={<AppointmentsList />} />
            <Route path="/users/:userId/cars/:carId/appointment" element={<Appointment />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
