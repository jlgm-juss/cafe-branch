//archivo que nos sirve para hacer las consultas a la api (json-server)

const URL = 'http://localhost:3004/productos';


//petición GET que trae todos los productos
export const consultarAPI = async()=>{
     try {
const respuesta = await fetch(URL);
const listaProductos = await respuesta.json();
//console.log(listaProductos)
return listaProductos
     }catch(error){
console.log(error);
     }
}