/* eslint-disable linebreak-style */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Access from './components/Access';
import CarsPage from './components/CarsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Access />} />
        <Route path="/users/:userId" element={<CarsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
