export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.nickname) {
    errors.nickname = 'El usuario es requerido';
  } else if (!/^[a-zA-Z0-9_-]{1,16}$/.test(values.nickname)) {
    errors.nickname =
      'El usuario no debe tener espacios o caracteres especiales, mínimo 1 letra';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/.test(values.password)) {
    errors.password =
      'La contraseña debe tener entre 4 y 10 letras, mínimo un número y una letra mayúscula';
  }
  return errors;
}
// ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$
