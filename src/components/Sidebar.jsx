import React from "react";
import { FaHome, FaSignOutAlt, FaPlus, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Sidebar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <aside className="w-16 bg-gray-800 text-white flex flex-col items-center fixed top-0 left-0 h-screen">
            <div className="py-4">
                <button
                    className="mb-4 p-3 bg-gray-800 rounded-full hover:bg-gray-700"
                    onClick={() => navigate("/")}
                >
                    <FaHome />
                </button>

                <button
                    className="mb-4 p-3 bg-gray-800 rounded-full hover:bg-gray-700"
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
    );
};

export default Sidebar;