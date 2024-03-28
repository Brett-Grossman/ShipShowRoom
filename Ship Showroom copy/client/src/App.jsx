import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home.jsx';
import Industrial from './views/Industrial.jsx';
import Fighter from './views/Fighter.jsx';
import ShipForm from './views/ShipForm.jsx';
import ShipDetails from './views/ShipDetails.jsx';
import ShipUpdate from './views/ShipUpdate.jsx';

import './App.css'

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ship/industrial" element={<Industrial />} />
        <Route path="/ship/fighter" element={<Fighter />} />
        <Route path="/ship/create" element={<ShipForm />} />
        <Route path="/ship/:id/details" element={<ShipDetails />} />
        <Route path="/ship/:id/update" element={<ShipUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
