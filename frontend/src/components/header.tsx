"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NotificationsPopover } from "@/components/notifications-popover";
import { UserMenu } from "@/components/user-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Archivos", href: "/files" },
  { name: "Subir", href: "/upload" },
  { name: "Historial", href: "/logs" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="rounded-full bg-blue-600 w-8 h-8 flex items-center justify-center text-white shadow dark:shadow-lg">F</span>
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
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 shadow"
                  : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-300"
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
