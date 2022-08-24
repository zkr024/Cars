import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavCars from './shared/navCars';
import User from './components/users/User';
import Login from './components/users/Login';
// import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <>
        <div className="frame">
          <NavCars />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
