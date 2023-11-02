import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Asegúrate de proporcionar la ruta correcta al archivo Sidebar


function Paciente() {
    const { logout } = useAuth();
    const [pacientes, setPacientes] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:3000/pacientes')
            .then((res) => res.json())
            .then(datosRespuesta => {
                setPacientes(datosRespuesta);
            })
            .catch(console.log)
    }, [])

    return (
        <>
        
        <div className="hidden-sidebar">
        <Sidebar />
        </div>

         {/* Agregar el componente Sidebar aquí */}
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <div>
                    <br />
                    <h1 className="font-bold px-6 text-lg text-center">Listado de pacientes</h1>
                    <br />
                </div>
                <table className="w-full border-collapse border bg-white text-left text-sm text-gray-500">
                    <thead>
                        <tr>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Documento</th>
                            {/* <th className="p-3 font-bold bg-gray-200 text-gray-900 border border-gray-300 hidden lg:table-cell">Tipo de documento</th> */}
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Nombre</th>
                            {/* <th className="p-3 font-bold bg-gray-200 text-gray-900 border border-gray-300 hidden lg:table-cell">Género</th> */}
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Edad</th>
                            {/* <th className="p-3 font-bold bg-gray-200 text-gray-900 border border-gray-300 hidden lg:table-cell">Fecha de nacimiento</th> */}
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Grupo sanguíneo</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">EPS</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Acciones</th>
                            {/* <th className="p-3 font-bold bg-gray-200 text-gray-900 border border-gray-300 hidden lg:table-cell">Celular</th>
                    <th className="p-3 font-bold bg-gray-200 text-gray-900 border border-gray-300 hidden lg:table-cell">Correo electrónico</th>
                    <th className="p-3 font-bold bg-gray-200 text-gray-900 border border-gray-300 hidden lg:table-cell">Dirección</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes &&
                            pacientes.map((paciente, index) => (
                                <tr key={index} className="overflow-hidden bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {paciente.doc_identidad}
                                    </td>
                                    {/* <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                {paciente.tipo_id}
                            </td> */}
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {paciente.nombre}
                                    </td>
                                    {/* <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                {paciente.genero}
                            </td> */}
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {paciente.edad}
                                    </td>
                                    {/* <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                {paciente.fecha_nacimiento}
                            </td> */}
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {paciente.grupo_sanguineo}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                        {paciente.eps}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <Link to={`/Historia/${paciente.id}`}>
                                            Ver Detalles
                                        </Link>
                                    </td>
                                    {/* <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                {paciente.celular}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                {paciente.email}
                            </td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                                {paciente.direccion}
                            </td> */}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <button className="bg-slate-300 m-4 lg:hover:bg-gray-400 py-3 px-6 rounded-full" onClick={logout}>Log out</button>
            <button className="bg-slate-300 m-4 lg:hover:bg-gray-400 py-3 px-6 rounded-full" onClick={() => navigate('/Paciente')}>Crear Paciente</button>
        </>
    )
}


export default Paciente;
