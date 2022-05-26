
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

       <div class="mainlogin">
        <div>
            <h4>Último Producto</h4>
        </div>
        <form action="/usuarios/logins" method="POST">
                <p>{listadoProductos.id}</p>
                <p>{listadoProductos.nombreProducto}</p>
                <p>${listadoProductos.precio}</p>
                <p>{listadoProductos.descripcion}</p>
        </form>
        </div>
</div>)
}

export default UltimoProducto;