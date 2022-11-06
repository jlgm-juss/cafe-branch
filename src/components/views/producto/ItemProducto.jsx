import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";

const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //realizar la consulta a la API
        borrarProductoAPI(producto._id).then((respuesta) => {
          if (respuesta.status === 200) {
            //actualizar el state productos o tabla
            consultarAPI().then((respuesta) => {
              setProductos(respuesta);
            });
            Swal.fire(
              "Producto eliminado",
              "El producto fue borrado.",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error",
              "Intente realizar una operación mas tarde.",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${producto._id}`}>Editar</Link>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
