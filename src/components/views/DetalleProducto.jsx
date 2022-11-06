import { useState, useEffect } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { obtenerProductoAPI } from "../helpers/queries";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        //cargar los datos de la repuesta en el formulario
        setProducto(respuesta.dato);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="container my-5 mainSection">
      <Row className="w-75">
        <Col md={6}>
          <img src={producto.imagen} alt="brownie" className="w-100" />
        </Col>
        <Col md={6} className="py-3">
          <h3>{producto.nombreProducto}</h3>
          <hr />
          <Badge bg="success">{producto.categoria}</Badge>
          <p className="mt-3">
            <b>Precio: ${producto.precio}</b>
          </p>
        </Col>
      </Row>
    </Card>
  );
};

export default DetalleProducto;