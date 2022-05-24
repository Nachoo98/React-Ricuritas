import TotalUsuarios from './components/totalUsuarios';
import TotalProductos from './components/totalProductos';
import ListadoProductos from './components/listadoProductos';
import UltimoProducto from './components/ultimoProducto';
import UltimoUsuario from './components/ultimoUsuario';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>{<TotalUsuarios/>}</h2>
      <h2>{<TotalProductos/>}</h2>
      {<ListadoProductos/>}
      {<UltimoProducto/>}
      {<UltimoUsuario/>}
    </div>
  );
}

export default App;
