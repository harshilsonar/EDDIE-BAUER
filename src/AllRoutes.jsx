import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topseller from './pages/Topseller';
import Shopmen from './pages/Shopmen';
import Shopwomen from './pages/Shopwomen';
import Jackets from './pages/Jackets';
import Dresses from './pages/Dresses';
import Tshirts from './pages/Tshirts';
import Swim from './pages/Swim';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topseller/" element={<Topseller/>}/>
      <Route path="/shopmen/"  element={<Shopmen/>}/>
      <Route path="/shopwomen/" element={<Shopwomen/>}/>
      <Route path="/jacket/" element={<Jackets/>}/>
      <Route path="/dresses/" element={<Dresses/>}/>
      <Route path="/tshirts/" element={<Tshirts/>}/>
      <Route path="/swim/" element={<Swim/>}/>
    </Routes>
  );
}

export default AllRoutes;
