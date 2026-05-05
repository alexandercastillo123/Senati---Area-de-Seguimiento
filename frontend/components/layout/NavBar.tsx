"use client"

import AppSidebar from "@/components/layout/AppSidebar";
import { Button } from "../ui/button";
import { useState} from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
export default function NavBar(){
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenToggle = () => {
        setOpenMenu(prev => !prev);
    }
    return (
        <>
            <header className="flex h-16 w-full items-center justify-evenly border-b border-gray-200 bg-white px-4 py-2 font-sans">
                <SidebarTrigger/>
                <Button
                    onClick={handleOpenToggle}
                >
                    click we
                </Button>
            </header>
        </>
    )
}