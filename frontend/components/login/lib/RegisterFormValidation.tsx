export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'El correo es requerido';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Ups, al parecer eso no es un email, intenta de nuevo.';
  }

  if (!values.nickname) {
    errors.nickname = 'El usuario es requerido';
  } else if (!/^[a-zA-Z0-9_-]{1,16}$/.test(values.nickname)) {
    errors.nickname =
      'El usuario no debe tener espacios o caracteres especiales, mínimo 1 letra';
  }

  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,16}$/.test(values.password)) {
    errors.password =
      'La contraseña debe tener entre 4 y 10 letras, mínimo un número y una letra mayúscula';
  }
  return errors;
}
// ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$
