import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
  const {_id, nombreProducto, precio, imagen} = {...producto}
  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={imagen}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{nombreProducto}</Card.Title>
        <Card.Text>Precio: ${precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link className="btn btn-danger me-2" to={`/detalle-producto/${_id}`}>Ver más</Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;