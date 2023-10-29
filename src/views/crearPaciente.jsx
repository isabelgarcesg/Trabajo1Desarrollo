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
        <form method="post" onSubmit={handleSubmit(handleRegister)}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Nombre
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Nombre"
                            {...register('nombre', { required: true })}
                        /> {errors.nombre && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                            Tipo de documento
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text"
                            name="tipo_id"
                            id="tipo_id"
                            placeholder="Tipo de documento"
                            {...register('tipo_id', { required: true })} /> {errors.tipo_id && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                            Número de documento
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                            type="text"
                            name="doc_identidad"
                            id="doc_identidad"
                            placeholder="Documento de identidad"
                            {...register('doc_identidad')} />{errors.doc_identidad && <p className="text-red-500 mt-1">Complete el campo</p>}

                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">

                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            Dirección
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            type="text"
                            name="direccion"
                            id="direccion"
                            placeholder="Direccion"
                            {...register('direccion', { required: true })} />  {errors.direccion && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            Celular
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            type="text"
                            name="celular"
                            id="celular"
                            placeholder="Número de celular"
                            {...register('celular', { required: true })} /> {errors.celular && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3 ">
                        <label className="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            Correo
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Correo electrónico"
                            {...register('email', { required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })} />{errors.email?.type === 'required' && <p className="text-red-500 mt-1">Email is required</p>}
                        {errors.email?.type === 'pattern' && <p className="text-red-500 mt-1">Please enter a valid email</p>}
                    </div>
                </div>
                <div> <br /></div>
                <div className="-mx-3 md:flex mb-2">

                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="eps">
                            EPS
                        </label>
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                            name="eps"
                            id="eps"
                            {...register('eps', { required: true })}
                        >
                            <option value="">Seleccione una EPS</option>
                            <option value="Sura">Sura</option>
                            <option value="Comeva">Comeva</option>
                            <option value="Nueva EPS">Nueva EPS</option>
                            <option value="Savia Salud">Savia Salud</option>
                        </select>
                        {errors.eps && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>


                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="eps">
                            Grupo sanguineo
                        </label>
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                            name="grupo_sanguineo"
                            id="grupo_sanguineo"
                            {...register('grupo_sanguineo', { required: true })}
                        >
                            <option value="">Seleccione el grupo sanguineo</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        {errors.grupo_sanguineo && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>

                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="eps">
                            Género
                        </label>
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                            name="genero"
                            id="genero"
                            {...register('genero', { required: true })}
                        >
                            <option value="">Seleccione una EPS</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Indenifido">Indefinido</option>
    
                        </select>
                        {errors.genero && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>

                </div>
                <div> <br /> </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            Edad
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            type="text"
                            name="edad"
                            id="edad"
                            placeholder="Edad"
                            {...register('edad', { required: true })} /> {errors.edad && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block  tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
                            Fecha de nacimiento
                        </label>
                        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                            type="date"
                            name="fecha_nacimiento"
                            id="fecha_nacimiento"
                            placeholder="Fecha de nacimiento"
                            {...register('fecha_nacimiento')} /> {errors.fecha_nacimiento && <p className="text-red-500 mt-1">Complete el campo</p>}
                    </div>
                </div>
                <div><br /></div>
                <button className="bg-sky-300 py-2 px-4 rounded-full w-1/4 mb-4" type="submit">Crear Paciente</button>
            </div>
        </form>
    );
}

export default CrearPaciente;