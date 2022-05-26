import React from 'react'
import{useState, useEffect} from 'react'


function TotalCategoria(){
const [categoria,setCategorias]=useState({valor:0});
function traerDato(){
      fetch('http://localhost:3015/api/products/category')
   .then(response=>response.json())
   .then(data=>{
       console.log(data.total)
       setCategorias({valor: data.total});
   })
   .catch(error=>console.error(error));
}

useEffect(()=>{
  traerDato();
},[])

return (<div>          
  <div className="mainlogin">
<div>
    <h4>Total de Categorias</h4>
</div>
<form action="/usuarios/logins" method="POST">
{categoria.valor}
</form>
</div>
</div>)
}



export default TotalCategoria;