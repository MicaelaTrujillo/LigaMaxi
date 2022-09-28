import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Pages/Home';
import NavbarComp from './Componentes/NavBarComp'
function App() {
  return (
    <BrowserRouter>
    <NavbarComp/>
        <Routes>
          {/*rutas publicas */}
          <Route path="/productos" element={<Home/>}/>
          {/* <Route path="/ventas" element={<Ventas/>}/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
