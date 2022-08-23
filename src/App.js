import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
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
            </Routes>
          </div>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
