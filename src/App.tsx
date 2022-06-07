import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import DetallePersonaje from './components/DetallePersonaje'
import NotFound from './components/NotFound';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {

  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:id" element={<DetallePersonaje />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
