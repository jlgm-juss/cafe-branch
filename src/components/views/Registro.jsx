import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreRegistrado: "",
      apellidoRegistrado: "",
      mailUsuario: "",
      passW: "",
    },
  });

  const onSubmit = (registrar) => {
    console.log(registrar);
    console.log("ejecutando registro");
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Registro</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar Nombre"
            {...register("nombreRegistrado", {
              required: "Es obligatorio ingresar un nombre",
              minLength: {
                value: 10,
                message: "Debe ingresar un mínimo de 10 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar un máximo de 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreRegistrado?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar Apellido"
            {...register("apellidoRegistrado", {
              required: "Es obligatorio ingresar un apellido",
              minLength: {
                value: 10,
                message: "Debe ingresar un mínimo de 10 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar un máximo de 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.apellidoRegistrado?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar Email"
            {...register("mailUsuario", {
              required: "Es obligatorio ingresar email",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message: "Debe ingresar un email válido",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.mailUsuario?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresar Contraseña"
            {...register("passW", {
              required: "Es obligatorio ingresar una contraseña",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message:
                  "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.passW?.message}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </section>
  );
}

export default Registro;
