"use client";

import {SidebarComponent} from "../componentes_generales/sidebar";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PerfilPage() {
const [editarPerfil, setEditarPerfil] = useState(false);
  return (
    <div className="flex">
        <SidebarComponent />
        
        
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-60 font-sans dark:bg-black p-8">
            <Card>
                <CardHeader>
                    <CardTitle>Perfil del Usuario</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <p>Aquí puedes ver y editar tu información personal.</p>
                    </CardDescription>
                    <br />
                    <h4>Nombre: Juan Pérez</h4>
                    <h4>Email: juan.perez@example.com</h4>
                    <h4>Teléfono: 123-456-7890</h4>
                    <h4>Dirección: Calle 123, Ciudad, País</h4>
                    <h4>Cumpleaños: 15/06/1990</h4>
                </CardContent>
                <div className="flex justify-center items-center">
                    <Button className=" w-[200px] mt-4 " onClick={() => setEditarPerfil(true)}>
                    Editar Perfil
                    </Button>
                </div>
            </Card>

            <div>
            {editarPerfil && (
            <div className="p-8 fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center bg-zinc-60 font-sans dark:bg-black p-8">
                <Card className="w-[400px]">
                    <CardHeader>
                        <CardTitle>Editar Perfil</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Input className="mb-4" placeholder="Nombre" defaultValue="Juan Pérez" />
                        <Input className="mb-4" placeholder="Email" defaultValue="juan.perez@example.com" />
                        <Input className="mb-4" placeholder="Teléfono" defaultValue="123-456-7890" />
                        <Input className="mb-4" placeholder="Dirección" defaultValue="Calle 123, Ciudad, País" />
                        <Input className="mb-4" placeholder="Cumpleaños" defaultValue="15/06/1990" />
                    </CardContent>
                    <div className="flex justify-end items-center p-4">
                        <Button className="mr-2" onClick={() => setEditarPerfil(false)}>
                            Cancelar
                        </Button>
                        <Button>
                            Guardar Cambios
                        </Button>
                    </div>
                </Card>
            </div>
        )}
        </div>
        </div>

        
    </div>
  );
}
    