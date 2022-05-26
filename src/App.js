import TotalUsuarios from './components/totalUsuarios';
import TotalProductos from './components/totalProductos';
import TotalCategorias from './components/totalCategorias';
import ListadoProductos from './components/listadoProductos';
import UltimoProducto from './components/ultimoProducto';
import UltimoUsuario from './components/ultimoUsuario';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        {<Header/>}
      </header>
      <main>
      <br></br>
      {<TotalUsuarios/>}
      <br></br>
      {<TotalProductos/>}
      <br></br>
      {<TotalCategorias/>}
      <br></br>
      {<ListadoProductos/>}
      <br></br>
      {<UltimoProducto/>}
      <br></br>
      {<UltimoUsuario/>}
      <br></br>
      </main>
    </div>
  );
}

export default App;
