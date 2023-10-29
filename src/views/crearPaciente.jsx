import { Navigate, useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import { useForm } from 'react-hook-form';
// function CrearPaciente(){
//     return(
//         <h2>HOLA</h2>
//     )
// }
function CrearPaciente() {
    const navigate = useNavigate();
    //   const { user, login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleRegister(value) {
        // hacer una peticion fetch al servidor para que registre al usuario
        // fetch('/api/register', { method: 'POST', body: value });

        fetch('http://localhost:3000/pacientes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(value)
        })
            .then((res) => res.json())
            .then((user) => {
                console.log(user)
                // login(user.id);
                // navigate("/login");
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-4">
                <h2 className="mb-4 font-bold text-2xl">Crear Paciente</h2>
                <form className="flex flex-col items-center" method="post" onSubmit={handleSubmit(handleRegister)}>
                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Nombre"
                            {...register('nombre', { required: true })}
                        />
                        {errors.nombre && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>

                    {/* NEW INFO */}

                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="text"
                            name="edad"
                            id="edad"
                            placeholder="edad"
                            {...register('edad', { required: true })}
                        />
                        {errors.edad && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>

                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="text"
                            name="tipo_id"
                            id="tipo_id"
                            placeholder="tipo_id"
                            {...register('tipo_id', { required: true })}
                        />
                        {errors.tipo_id && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="text"
                            name="grupo_sanguineo"
                            id="grupo_sanguineo"
                            placeholder="grupo_sanguineo"
                            {...register('grupo_sanguineo', { required: true })}
                        />
                        {errors.grupo_sanguineo && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="text"
                            name="genero"
                            id="genero"
                            placeholder="genero"
                            {...register('genero', { required: true })}
                        />
                        {errors.genero && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="text"
                            name="celular"
                            id="celular"
                            placeholder="celular"
                            {...register('celular', { required: true })}
                        />
                        {errors.celular && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="text"
                            name="eps"
                            id="eps"
                            placeholder="eps"
                            {...register('eps', { required: true })}
                        />
                        {errors.eps && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>





                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="text"
                            name="direccion"
                            id="direccion"
                            placeholder="direccion"
                            {...register('direccion', { required: true })}
                        />
                        {errors.direccion && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            className="rounded-md p-2 text-black w-full"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            {...register('email', { required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })}
                        />
                        {errors.email?.type === 'required' && <p className="text-red-500 mt-1">Email is required</p>}
                        {errors.email?.type === 'pattern' && <p className="text-red-500 mt-1">Please enter a valid email</p>}
                    </div>
                    <input
                        className="mb-4 rounded-md p-2 text-black w-full"
                        type="date"
                        name="fecha_nacimiento"
                        id="fecha_nacimiento"
                        placeholder="Fecha de nacimiento"
                        {...register('fecha_nacimiento')}
                    />
                    <input
                        className="mb-4 rounded-md p-2 text-black w-full"
                        type="text"
                        name="doc_identidad"
                        id="doc_identidad"
                        placeholder="Documento de identidad"
                        {...register('doc_identidad')}
                    />
                    {/* <div>
                        <input
                            className="mb-4 rounded-md p-2 text-black mr-2"
                            type="checkbox"
                            name="terms"
                            id="terms"
                            {...register('terms')}
                        />
                        <label htmlFor="terms">Accept the terms of the service</label>
                    </div> */}

                    <button className="bg-sky-500 py-2 px-4 rounded-full w-full mb-4" type="submit">
                        Crear
                    </button>
                    {/* <Link className="hover:underline" to="/login">Sign In</Link> */}
                </form>
            </div>
        </div>
    );
}

export default CrearPaciente;