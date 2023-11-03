import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

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

    if (user) {
        return (<Navigate to="/" />);
    }

    function handleSubmit(e) {
      e.preventDefault();
  
      const form = e.target;
      const formData = new FormData(form);
  
      const loginObject = Object.fromEntries(formData.entries());
  
      // Buscar el usuario en el arreglo personal
      const foundUser = personal.find(
          (user) =>
              user.usuario === loginObject.username &&
              user.password === loginObject.password
      );
  
      if (foundUser) {
          // Usuario y contraseña válidos, procede con el inicio de sesión
          login(foundUser);
          navigate('/');
          console.log(foundUser) 
      } else {
          // El inicio de sesión falló
          console.log('Usuario o contraseña incorrectos');
      }
  }

    return (
  
<div className="w-screen h-screen flex justify-center items-center">
  <div className="p-4">
    <div className="bg-slate-300 rounded-md p-6 text-center">
      <h2 className="mb-4 font-bold text-3xl">Iniciar sesión</h2>
      <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
        <input className="mb-4 rounded-md p-3 text-black" type="text" name="username" id="username" placeholder="Username" />
        <input className="mb-4 rounded-md p-3 text-black" type="password" name="password" id="password" placeholder="Password" />
        <button className="bg-slate-100 lg:hover:bg-gray-400 py-3 px-6 rounded-full" type="submit">Sing in</button>
      </form>
    </div>
  </div>
</div>



    )
}

export default Login;