import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import Navegacion from "./plantilla/Navegacion";
import AgregarPelicula from "./peliculas/AgregarPelicula";
import EditarPelicula from "./peliculas/EditarPelicula";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
           <Navegacion/>
           <Routes>
              <Route exact path='/' element={<ListadoPeliculas/>}/>
              <Route exact path='/agregar' element={<AgregarPelicula/>}/>
              <Route exact path='/editar/:id' element={<EditarPelicula/>}/>
           </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
 