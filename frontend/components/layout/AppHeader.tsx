"use client"
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "../ui/avatar"
import { SidebarTrigger } from "../ui/sidebar"

export default function AppHeader() {
    return (
        <div className="w-full h-12.5">
            <div className="bg-blue-500 justify-between">
                <div>
                    <SidebarTrigger />
                    <h1 className="text-black">Menú Principal</h1>
                </div>
                <div className="flex flex-row gap-5">
                    <div className="gap-5">
                        <p>Edison</p>
                        <small>Medina</small>
                    </div>
                    <Avatar>
                        <AvatarImage src="https://github.com/evilrabbit.png"></AvatarImage>
                        <AvatarBadge className="bg-green-600 "></AvatarBadge>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}
