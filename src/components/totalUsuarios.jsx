
import React from 'react'
import{useState, useEffect} from 'react'


function TotalUsuario(){
const [usuarios,setUsuarios]=useState({valor:0});
function traerDato(){
      fetch('http://localhost:3015/api/users')
   .then(response=>response.json())
   .then(data=>{
       console.log(data.total)
       setUsuarios({valor: data.total});
   })
   .catch(error=>console.error(error));
}

useEffect(()=>{
  traerDato();
},[])

return (<div> 
         <div class="mainlogin">
        <div>
            <h4>Total de Usuarios</h4>
        </div>
        <form action="/usuarios/logins" method="POST">
        {usuarios.valor}
        </form>
        </div>
  </div>)
}



export default TotalUsuario;