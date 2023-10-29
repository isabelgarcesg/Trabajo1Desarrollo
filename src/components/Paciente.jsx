import { useNavigate } from 'react-router-dom';

function Paciente({ paciente }) {
    const navigate = useNavigate();
    return (
        <tr className="border hover:bg-gray-50">
            <th className="border px-6 py-4">{paciente.doc_identidad}</th>
            <td className="border px-6 py-4">{paciente.nombre}</td>
            <td className="border px-6 py-4">{paciente.genero}</td>
            <td className="border px-6 py-4">{paciente.grupo_sanguineo}</td>
            <td className="border px-6 py-4">{paciente.celular}</td>
            <td className="border px-6 py-4">{paciente.direccion}</td>
            <td className="border px-6 py-4">{paciente.email}</td>
            <td className="border px-6 py-4">{paciente.eps}</td>
            {/*<td className="border px-6 py-4">
                <div className="flex justify-center gap-4">
                    {/* <a x-data="{ tooltip: 'Delete' }" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>

                    </a>
                    <a x-data="{ tooltip: 'Edite' }" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                        </svg>

                    </a>
                        <a x-data="{ tooltip: 'Edite' }" onClick={() => navigate(`/paciente/${paciente._id}`)}> 
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

                    </a>

                </div>
            </td> */}
        </tr>


    );
}

export default Paciente;

