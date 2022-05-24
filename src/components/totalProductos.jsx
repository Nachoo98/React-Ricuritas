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

return (<div> {productos.valor}</div>)
}



export default TotalProductos;