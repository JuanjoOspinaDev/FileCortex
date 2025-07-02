"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { NotificationsPopover } from "@/components/notifications-popover";
import { UserMenu } from "@/components/user-menu";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Archivos", href: "/files" },
  { name: "Subir", href: "/upload" },
  { name: "Historial", href: "/logs" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="rounded-full bg-blue-600 w-8 h-8 flex items-center justify-center text-white shadow">F</span>
          FileCortex
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2 md:gap-6">
          {navItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-xl text-base font-medium transition ${
                pathname === item.href
                  ? "bg-blue-100 text-blue-700 shadow"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* User actions */}      
        <div className="flex items-center gap-4">
          <NotificationsPopover />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
