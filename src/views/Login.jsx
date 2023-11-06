import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import logo from "../assets/logo1.png";

const personal = [
  {
    "_id": 10,
    "tipo_id": "Cedula",
    "nombre": "Pedro Jesús Giraldo",
    "email": "jesusg@gmail.com",
    "doc_identidad": "4826109375",
    "cargo": "Enfermero",
    "foto": "https://randomuser.me/api/portraits/men/78.jpg",
    "usuario": "pedroj",
    "password": "12345"
  },
  {
    "_id": 2,
    "tipo_id": "Cedula",
    "nombre": "Paulina González",
    "email": "mpaulina@gmail.com",
    "doc_identidad": "9876543210",
    "cargo": "Enfermera",
    "foto": "https://randomuser.me/api/portraits/women/90.jpg",
    "usuario": "paulina",
    "password": "12345"
  },
  {
    "_id": 3,
    "tipo_id": "Cedula",
    "nombre": "Francisco Arango",
    "email": "fa1990@hotmail.com",
    "doc_identidad": "2468135790",
    "cargo": "Medico",
    "foto": "https://randomuser.me/api/portraits/men/74.jpg",
    "usuario": "francisco",
    "password": "12345"
  },
  {
    "_id": 4,
    "tipo_id": "cedula",
    "nombre": "José Gallego",
    "email": "joseg86@gmail.com",
    "doc_identidad": "1357924680",
    "cargo": "Enfermero",
    "foto": "https://randomuser.me/api/portraits/men/2.jpg",
    "usuario": "joseg",
    "password": "12345"
  },
  {
    "_id": 5,
    "tipo_id": "cedula",
    "nombre": "Luisa María Cadena",
    "email": "lmcadena@gmail.com",
    "doc_identidad": "3147258960",
    "cargo": "Enfermera",
    "foto": "https://randomuser.me/api/portraits/women/10.jpg",
    "usuario": "luisam",
    "password": "12345"
  }
]

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  if (user) {
    return <Navigate to="/" />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const loginObject = Object.fromEntries(formData.entries());

    if (!loginObject.username || !loginObject.password) {
      setErrorMessage("Los campos son requeridos");
      return; // Detener la función si hay errores
    } else {
      setErrorMessage("");
    }

    // Buscar el usuario en el arreglo personal
    const foundUser = personal.find(
      (user) =>
        user.usuario === loginObject.username &&
        user.password === loginObject.password
    );

    if (foundUser) {
      login(foundUser);
      navigate('/');
      console.log(foundUser);
    } else {
      setErrorMessage("Usuario o contraseña incorrectos"); // Mostrar mensaje de error
    }
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row items-center">
          <div className="mb-4 mr-4">
            <img className="h-40" src={logo} alt="Logo" />
          </div>
          <h4 className="mb-8 font-extrabold leading-tight lg:text-2xl text-dark-grey-900">
            Sistema de historias electrónicas <br /> Hospital Central
          </h4>
        </div>
        <div className="p-4">
          <div className="bg-slate-300 rounded-md p-6 text-center">
            <h2 className="mb-4 font-bold text-3xl">Iniciar sesión</h2>
            <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
              <input
                className="mb-4 rounded-md p-3 text-black"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <input
                className="mb-4 rounded-md p-3 text-black"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Mostrar mensaje de error */}
              <button
                className="bg-slate-100 lg:hover:bg-gray-400 py-3 px-6 rounded-full"
                type="submit"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  
  
  
}

export default Login;






