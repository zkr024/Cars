/* eslint-disable linebreak-style */

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Access from './components/Access';
import CarsPage from './components/frontPage/FrontPage';
import Car from './components/details/Car';
import AllCars from './components/car/AllCars';
import NavCars from './shared/navCars';
import User from './components/users/User';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <>
          <div className="frame">
            <NavCars />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/access" element={<Access />} />
              <Route path="/users/:userId" element={<CarsPage />} />
              <Route path="/users/:userId/cars" element={<AllCars />} />
              <Route path="/cars/:carId" element={<Car />} />
            </Routes>
          </div>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
