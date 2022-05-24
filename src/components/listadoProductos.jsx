
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

return (<div>
<ul>
{listadoProductos.length===0 && <p>...Cargando...</p>}
{
    listadoProductos.map((listadoProducto, i)=>{

        return (
            <li key={i}>
                <p>{listadoProducto.id}</p>
                <p>{listadoProducto.nombreProducto}</p>
                <p>{listadoProducto.precio}</p>
                <p>{listadoProducto.descripcion}</p>
            </li>
        )
    }
    ) }
</ul>
</div>)
}

export default ListadoProductos;