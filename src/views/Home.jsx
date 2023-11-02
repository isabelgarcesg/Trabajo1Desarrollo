import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
    FaHome,
    FaSignOutAlt,
    FaPlus,
    FaUsers,
} from "react-icons/fa";
import hospitalImage from "../assets/Hospital.jpg";

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="h-screen flex">
            {/* Sidebar */}
            <aside className="w-16 bg-gray-800 text-white flex flex-col items-center">
                <div className="py-4">
                    <button
                        className="mb-4 p-3 bg-gray-800 rounded-full hover:bg-gray-700"
                        onClick={() => navigate("/")}
                    >
                        <FaHome />
                    </button>

                    <button
                        className="mb-4 p-3 bg-gray-800 rounded-full hover-bg-gray-700"
                        onClick={() => navigate("/ListarPacientes")}
                    >
                        <FaUsers />
                    </button>

                    <button
                        className="mb-4 p-3 bg-gray-800 rounded-full hover:bg-gray-700"
                        onClick={() => navigate("/Paciente")}
                    >
                        <FaPlus />
                    </button>

                    <button
                        className="mb-4 p-3 bg-gray-800 rounded-full hover:bg-gray-700"
                        onClick={logout}
                    >
                        <FaSignOutAlt />
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4">
                {/* Cabecera del contenido */}
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Hospital Central</h1>
                    <p>Bienvenido al sistema de historias clínicas</p>
                </div>

                {/* Imagen del hospital */}
                <div className="mb-8">
                    <img
                        src={hospitalImage}
                        alt="Hospital"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Noticias de interés */}
                <div className="text-xl font-bold mb-4">Noticias de interés</div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                    {/* Aquí puedes agregar tus noticias de interés en un diseño organizado */}
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">Título de la noticia</h2>
                        <p>Descripción breve de la noticia.</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">Título de la noticia</h2>
                        <p>Descripción breve de la noticia.</p>
                    </div>
                    {/* Agrega más noticias aquí */}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
