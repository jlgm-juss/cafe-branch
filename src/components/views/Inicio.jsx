import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import CardProducto from "./producto/CardProducto";



const Inicio = () => {

  const [productos, setProductos] = useState([])


  useEffect(()=>{

    // opcion 1
    consultarAPI().then((respuesta)=>{
      console.log(respuesta)
      setProductos(respuesta)
    })
  },[])

  return (
    <Container className="my-5 mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={1} md={4} className="g-4">
        {/* aqui van las columnas */}
        {
          productos.map((producto)=>  <CardProducto key={producto._id} producto={producto}></CardProducto>)
        }
       
      </Row>
    </Container>
  );
};

export default Inicio;