import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Admin } from './pages/Admin';
import { Map } from './pages/Map';
import { Location } from './pages/Location';
import { Store } from './pages/Store'
import { Combat } from './pages/Combat';
import { NoPage } from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/admin' element={ <Admin/> }/>
        <Route path='/map' element={ <Map/> }/>
        <Route path='/location' element={ <Location/> }/>
        <Route path='/store' element={ <Store/> }/>
        <Route path='/combat' element={ <Combat/> }/>
        <Route path='*' element={ <NoPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;