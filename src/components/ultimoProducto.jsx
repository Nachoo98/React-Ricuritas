
import React from 'react'
import{useState, useEffect} from 'react'


function UltimoProducto(){
const [listadoProductos,setProductos]=useState([]);
function traerDato(){
      fetch('http://localhost:3015/api/products')
   .then(response=>response.json())
   .then(data=>{
       setProductos(data.data[data.data.length-1]);
   })
   .catch(error=>console.error(error));
}


useEffect(()=>{
    traerDato();
},[])

return (<div>

                <p>{listadoProductos.id}</p>
                <p>{listadoProductos.nombreProducto}</p>
                <p>{listadoProductos.precio}</p>
                <p>{listadoProductos.descripcion}</p>

</div>)
}

export default UltimoProducto;