import React from 'react'
import{useState, useEffect} from 'react'


function TotalProductos(){
const [productos,setProductos]=useState({valor:0});
function traerDato(){
      fetch('http://localhost:3015/api/products')
   .then(response=>response.json())
   .then(data=>{
       console.log(data.total)
       setProductos({valor: data.total});
   })
   .catch(error=>console.error(error));
}

useEffect(()=>{
  traerDato();
},[])

return (<div>          
  <div className="mainlogin">
<div>
    <h4>Total de Productos</h4>
</div>
<form action="/usuarios/logins" method="POST">
{productos.valor}
</form>
</div>
</div>)
}



export default TotalProductos;