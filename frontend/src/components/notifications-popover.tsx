"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const notifications = [
  { id: 1, message: "Tu archivo 'factura.pdf' ha terminado de procesarse.", time: "hace 1 min" },
  { id: 2, message: "Nuevo login detectado en tu cuenta.", time: "hace 20 min" },
  { id: 3, message: "Procesamiento fallido en 'video.mp4'.", time: "hace 2 h" },
];

export function NotificationsPopover() {
  const unread = notifications.length > 0;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-6 h-6" />
          {unread && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="px-4 py-2 border-b font-semibold text-gray-700">Notificaciones</div>
        <ul className="max-h-64 overflow-y-auto divide-y">
          {notifications.length === 0 ? (
            <li className="px-4 py-6 text-gray-400 text-center">No hay notificaciones.</li>
          ) : (
            notifications.map(n => (
              <li key={n.id} className="px-4 py-3 hover:bg-gray-50 transition">
                <div className="text-sm text-gray-800">{n.message}</div>
                <div className="text-xs text-gray-400">{n.time}</div>
              </li>
            ))
          )}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
