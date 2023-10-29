import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const USER = {
    username: 'admin',
    password: '123456',
}

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

        // hacer una peticion fetch al servidor para que verifique el login
        // fetch('/api/login', { method: form.method, body: formData });

        const loginObject = Object.fromEntries(formData.entries());
        if (loginObject.username === USER.username && loginObject.password === USER.password) {
            // login exitoso
            login(loginObject.username)
            navigate('/');
        } else {
            // el login falló
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
        <button className="bg-slate-100 py-3 px-6 rounded-full" type="submit">Sing in</button>
        <button className="bg-slate-300 m-4 py-3 px-6 rounded-full" onClick={() => navigate('/Paciente')}>Crear Paciente</button>
        <button className="bg-slate-300 m-4 py-3 px-6 rounded-full" onClick={() => navigate('/ListarPacientes')}>Listar pacientes</button>
      </form>
    </div>
  </div>
</div>



    )
}

export default Login;