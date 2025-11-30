"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileCard } from "@/components/file-card";
import { FilePlus, Search, Loader2, Filter } from "lucide-react";
import { FileFilters } from "@/components/file-filters";
import { FileListSkeleton } from "@/components/file-list-skeleton";
import type { FileItem } from "@/domain/files/types";

export default function FilesPage() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<{ type: string; status: string }>({
    type: "all",
    status: "all",
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFiles([
        {
          id: "1",
          name: "foto-vacaciones.jpg",
          type: "image/jpeg",
          size: 328987,
          status: "completado",
          createdAt: "2024-06-30T12:01:00Z",
          previewUrl: "/mock/foto-vacaciones.jpg",
        },
        {
          id: "2",
          name: "grabacion.m4a",
          type: "audio/m4a",
          size: 888219,
          status: "procesando",
          createdAt: "2024-06-30T11:59:00Z",
          previewUrl: "/mock/voice.png",
        },
        {
          id: "3",
          name: "documento.pdf",
          type: "application/pdf",
          size: 551234,
          status: "fallido",
          createdAt: "2024-06-29T17:32:00Z",
          previewUrl: "/mock/pdf.png",
        },
        {
          id: "4",
          name: "video-demo.mp4",
          type: "video/mp4",
          size: 17552320,
          status: "completado",
          createdAt: "2024-06-25T10:45:00Z",
          previewUrl: "/mock/video.png",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredFiles = files.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filters.type === "all" || f.type.startsWith(filters.type);
    const matchesStatus = filters.status === "all" || f.status === filters.status;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-700 mb-1">Mis Archivos</h1>
          <p className="text-gray-500">Tu galería de archivos multimedia y documentos.</p>
        </div>
        <Button asChild className="gap-2 px-6 py-2 font-semibold text-base">
          <a href="/upload">
            <FilePlus className="w-5 h-5" />
            Subir archivos
          </a>
        </Button>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-96">
          <Input
            type="text"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
        <FileFilters filters={filters} setFilters={setFilters} />
      </div>

      {/* Lista de archivos */}
      <section>
        {loading ? (
          <FileListSkeleton />
        ) : filteredFiles.length === 0 ? (
          <div className="text-gray-400 text-center py-16">
            <span className="block text-5xl mb-4">🗂️</span>
            No hay archivos que coincidan con la búsqueda o filtros.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFiles.map(file => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
