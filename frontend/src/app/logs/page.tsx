"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { LogCard } from "@/components/log-card";
import { LogFilters } from "@/components/log-filters";
import { LogListSkeleton } from "@/components/log-list-skeleton";
import { Search } from "lucide-react";
import type { LogItem } from "@/domain/logs/types";

export default function LogsPage() {
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<{ status: string; process: string }>({
    status: "all",
    process: "all",
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLogs([
        {
          id: "log1",
          fileId: "2",
          fileName: "grabacion.m4a",
          fileType: "audio/m4a",
          process: "transcripcion",
          status: "exito",
          message: "Audio transcrito exitosamente.",
          createdAt: "2024-06-30T12:22:13Z",
        },
        {
          id: "log2",
          fileId: "3",
          fileName: "documento.pdf",
          fileType: "application/pdf",
          process: "ocr",
          status: "fallo",
          message: "No se pudo extraer texto del PDF.",
          createdAt: "2024-06-30T11:56:48Z",
          details: "Traceback (most recent call last):\nPDFParserError: archivo corrupto...",
        },
        {
          id: "log3",
          fileId: "4",
          fileName: "video-demo.mp4",
          fileType: "video/mp4",
          process: "thumbnail",
          status: "exito",
          message: "Miniatura generada.",
          createdAt: "2024-06-30T11:00:03Z",
        },
        {
          id: "log4",
          fileId: "1",
          fileName: "foto-vacaciones.jpg",
          fileType: "image/jpeg",
          process: "ocr",
          status: "exito",
          message: "Texto extraído.",
          createdAt: "2024-06-29T18:12:10Z",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const filteredLogs = logs.filter(log => {
    const matchesSearch =
      log.fileName.toLowerCase().includes(search.toLowerCase()) ||
      log.message.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filters.status === "all" || log.status === filters.status;
    const matchesProcess = filters.process === "all" || log.process === filters.process;
    return matchesSearch && matchesStatus && matchesProcess;
  });

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-blue-700 mb-1">Historial de Procesos</h1>
        <p className="text-gray-500">Registro detallado de tareas de procesamiento.</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative w-full md:w-80">
          <Input
            type="text"
            placeholder="Buscar por archivo o mensaje..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
        <LogFilters filters={filters} setFilters={setFilters} />
      </div>
      <section>
        {loading ? (
          <LogListSkeleton />
        ) : filteredLogs.length === 0 ? (
          <div className="text-gray-400 text-center py-16">
            <span className="block text-5xl mb-4">📄</span>
            No hay logs que coincidan con la búsqueda o filtros.
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {filteredLogs.map(log => (
              <LogCard key={log.id} log={log} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
