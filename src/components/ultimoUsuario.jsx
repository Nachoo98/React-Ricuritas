import React from 'react'
import{useState, useEffect} from 'react'


function UltimoUsuario(){
const [listadoUsuarios,setUsuarios]=useState([]);
function traerDato(){
      fetch('http://localhost:3015/api/users')
   .then(response=>response.json())
   .then(data=>{
       setUsuarios(data.data[data.data.length-1]);
   })
   .catch(error=>console.error(error));
}


useEffect(()=>{
    traerDato();
},[])

return (<div>
    
    <div class="mainlogin">
        <div>
            <h4>Último Usuario Registrado</h4>
        </div>
        <form action="/usuarios/logins" method="POST">
                <p>id: {listadoUsuarios.id}</p>
                <p>Nombre de Usuario: {listadoUsuarios.nombreUsuario}</p>
                <p>Nombre: {listadoUsuarios.nombre}</p>
                <p>Apellido: {listadoUsuarios.apellido}</p>
                <p>Mail: {listadoUsuarios.mail}</p>
        </form>
        </div>

</div>)
}

export default UltimoUsuario;