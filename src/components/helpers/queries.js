//archivo que nos sirve para hacer las consultas a la api (json-server)

const URL = 'http://localhost:3004/productos';

// tipos de peticiones
//petición GET que trae todos los productos o un producto
// petición POST, crear un producto, login
// petición DELETE, para borrar un producto
// petición PUT, modificar un producto    


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