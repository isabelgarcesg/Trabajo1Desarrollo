import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


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
            <Sidebar />

            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5" style={{ marginLeft: '70px' }}>
                <div>
                    <br />
                    <h1 className="font-bold px-6 text-lg text-center">Listado de pacientes</h1>
                    <br />
                </div>
                <table className="w-full border-collapse border bg-white text-left text-sm text-gray-500">
                    <thead>
                        <tr>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Documento</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Nombre</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Edad</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Grupo sanguíneo</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">EPS</th>
                            <th className="p-3 font-bold bg-gray-200 text-gray-900 text-center border border-gray-300 hidden lg:table-cell">Registros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes &&
                            pacientes.map((paciente, index) => (
                                <tr key={index} className="border hover:bg-gray-50">
                                    <th className="border px-6 py-4 text-center">{paciente.doc_identidad}</th>
                                    <td className="border px-6 py-4 text-center">{paciente.nombre}</td>
                                    <td className="border px-6 py-4 text-center">{paciente.edad}</td>
                                    <td className="border px-6 py-4 text-center">{paciente.grupo_sanguineo}</td>
                                    <td className="border px-6 py-4 text-center">{paciente.eps}</td>
                                    <td className="border px-6 py-4">
                                        <Link to={`/Historia/${paciente.id}`}>
                                            <div className="flex items-center justify-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                    x-tooltip="tooltip"
                                                >
                                                    <line x1="12" y1="5" x2="12" y2="19" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {/* <button className="bg-slate-300 m-4 lg:hover:bg-gray-400 py-3 px-6 rounded-full" onClick={logout} style={{ marginLeft: '70px' }}>
                Log out
            </button>
            <button className="bg-slate-300 m-4 lg:hover:bg-gray-400 py-3 px-6 rounded-full" onClick={() => navigate('/Paciente')}>
                Crear Paciente
            </button> */}
        </>

    )
}


export default Paciente;
