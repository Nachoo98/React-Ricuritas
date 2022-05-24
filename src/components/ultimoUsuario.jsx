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

                <p>{listadoUsuarios.id}</p>
                <p>{listadoUsuarios.nombreUsuario}</p>
                <p>{listadoUsuarios.nombre}</p>
                <p>{listadoUsuarios.apellido}</p>
                <p>{listadoUsuarios.mail}</p>

</div>)
}

export default UltimoUsuario;