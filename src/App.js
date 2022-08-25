import { Routes, Route } from 'react-router-dom';
import Access from './components/Access';
import FrontPage from './components/frontPage/FrontPage';
import Car from './components/details/Car';
import AllCars from './components/car/AllCars';
import Home from './components/Home';
import NavCars from './shared/navCars';
import User from './components/users/User';
import Login from './components/users/Login';
import Appointment from './components/appointments/Appointment';

function App() {
  return (
    <div className="app">
      <>
        <div className="frame">
          <NavCars />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/access" element={<Access />} />
            <Route path="/users/:userId" element={<FrontPage />} />
            <Route path="/users/:userId/cars" element={<AllCars />} />
            <Route path="/users/:userId/cars/:carId" element={<Car />} />
            <Route path="/users/:userId/cars/:carId/appointment" element={<Appointment />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
