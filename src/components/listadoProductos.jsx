
import React from 'react'
import{useState, useEffect} from 'react'


function ListadoProductos(){
const [listadoProductos,setProductos]=useState([]);
function traerDato(){
      fetch('http://localhost:3015/api/products')
   .then(response=>response.json())
   .then(data=>{
       setProductos(data.data);
   })
   .catch(error=>console.error(error));
}


useEffect(()=>{
    traerDato();
},[])

return (<div className="mainlogin">
     <h2>Listado de Productos</h2>
<ul>
{listadoProductos.length===0 && <p>...Cargando...</p>}
{
    listadoProductos.map((listadoProducto, i)=>{

        return (<div>
            <ul className="prueba" key={i}>
                <li className='pruebaid'>{listadoProducto.id}</li>
                <li classname='pruebanombre'>{listadoProducto.nombreProducto}</li>
                <li>${listadoProducto.precio}</li>
                <li>{listadoProducto.descripcion}</li>
            </ul>
            </div>)
    }
    ) }
</ul>
</div>)
}

export default ListadoProductos;