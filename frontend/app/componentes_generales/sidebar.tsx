import { Sidebar } from "lucide-react";

export default function SidebarComponent() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex items-center">
            <Sidebar className="mr-2" />
            <span className="text-lg font-bold">Gestion Seguimiento</span>
        </div>
        <nav className="flex-1 p-4">
            <ul>
                <li className="mb-2">
                    <a href="/dashboard" className="block p-2 rounded hover:bg-gray-700">Dasboard</a>
                </li>
                <li className="mb-2">
                    <a href="/seguimiento" className="block p-2 rounded hover:bg-gray-700">Seguimiento Estuiantes</a>
                </li>
                <li className="mb-2">
                    <a href="/perfil" className="block p-2 rounded hover:bg-gray-700">Perfil</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="block p-2 rounded hover:bg-gray-700">Cerrar sesión</a>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export { SidebarComponent };