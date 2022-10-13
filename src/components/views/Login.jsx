import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreUsuario: "",
      pass: "",
    },
  });

  const onSubmit = (loguear) => {
    console.log(loguear);
    console.log("ejecutando logueo");
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Login</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar Email"
            {...register("nombreUsuario", {
              required: "Es obligatorio ingresar email",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message: "Debe ingresar un email válido",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreUsuario?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingresar Contraseña"
          {...register("pass", {
            required: "Es obligatorio ingresar una contraseña",
            pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message: "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos."
            },
          })} />
          <Form.Text className="text-danger">
            {errors.pass?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </section>
  );
}

export default Login;
