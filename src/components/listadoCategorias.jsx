import React from 'react'
import{useState, useEffect} from 'react'


function ListadoCategoria(){
const [listadoCategoria,setCategorias]=useState([]);
function traerDato(){
      fetch('http://localhost:3015/api/products/category')
   .then(response=>response.json())
   .then(data=>{
       console.log(data.data)
       setCategorias(data.data);
   })
   .catch(error=>console.error(error));
}

useEffect(()=>{
  traerDato();
},[])


return (<div className="mainlogin">
     <h2>Listado de Categorias</h2>
<ul>
{listadoCategoria.length===0 && <p>...Cargando...</p>}
{
    listadoCategoria.map((listadoCategoria, i)=>{

        return (<div>
            <li className="prueba" key={i}>
                <p>{listadoCategoria.nombre}-</p>
                <p>{listadoCategoria.Producto.length}</p>
            </li>
            </div>)
    }
    ) }
</ul>
</div>)

}



export default ListadoCategoria;