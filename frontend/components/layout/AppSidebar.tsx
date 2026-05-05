"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarInset
} from "@/components/ui/sidebar"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { type ReactNode, type CSSProperties, useState } from "react";
import Image from "next/image";
import SenatiLogo from "@/assets/img/Senati-Symbol.png";
import { useRouter } from "next/navigation";
interface AppSidebarProps {
    children?: ReactNode;
}
export default function AppSidebar({children}: AppSidebarProps) {
const [openMenu, setOpenMenu] = useState(false);
const handleOpenMenu = () => {
    setOpenMenu(true);
}

const handleCloseMenu = () => {
    setOpenMenu(false);
}

  return (
    
    <SidebarProvider
        open={openMenu}
        onOpenChange={handleOpenMenu}
        style={{ "--sidebar-width": "260px"} as CSSProperties}
    >  
        <Sidebar
            collapsible="icon"
            onMouseEnter={handleOpenMenu}
            onMouseLeave={handleCloseMenu}
        >
        <SidebarHeader>
            {openMenu ? (
                <div className="flex flex-row items-center gap-2">
                    <Image
                        src={SenatiLogo}
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <Label className="text-lg font-bold">Senati</Label>
                </div>
            ):
            (
                <Image
                    src={SenatiLogo}
                    alt="Logo"
                    width={60}
                    height={60}
                />
            )}
            
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
                Hola
                <SidebarMenuItem>
                    xd
                </SidebarMenuItem>
            </SidebarMenu>
            <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
        </Sidebar>
        {children && (
            <SidebarInset>
                {children}
            </SidebarInset>
            
        )}
    </SidebarProvider>
    
  )
}