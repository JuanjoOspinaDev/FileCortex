"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, Image, Video, FileAudio, FileText, X, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import clsx from "clsx";
import { formatBytes } from "@/lib/format";

const FILE_TYPES = [
  { label: "Imagen", value: "image/*", icon: <Image className="w-5 h-5" /> },
  { label: "Video", value: "video/*", icon: <Video className="w-5 h-5" /> },
  { label: "Audio", value: "audio/*", icon: <FileAudio className="w-5 h-5" /> },
  { label: "PDF", value: "application/pdf", icon: <FileText className="w-5 h-5" /> },
];

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFiles = async () => {
    setUploading(true);
    setError(null);
    setProgress(0);

    // Simulación de subida con progreso
    for (let i = 1; i <= 100; i += 10) {
      await new Promise(res => setTimeout(res, 70));
      setProgress(i);
    }

    // Simular éxito o fallo
    setTimeout(() => {
      setUploading(false);
      setFiles([]);
      setProgress(0);
    }, 500);
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const array = Array.from(newFiles);
    setFiles(prev => [...prev, ...array]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">Sube tus archivos</h1>
      <p className="text-gray-600 mb-4">
        Arrastra tus imágenes, videos, audios o PDFs aquí, o selecciona desde tu dispositivo.
      </p>

      {/* Dropzone */}
      <div
        className={clsx(
          "border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition h-56 bg-white relative",
          isDragging ? "border-blue-600 bg-blue-50" : "border-gray-300"
        )}
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={e => { e.preventDefault(); setIsDragging(false); }}
        onDrop={handleDrop}
        tabIndex={0}
        role="button"
        aria-label="Drop files here"
        onClick={() => inputRef.current?.click()}
      >
        <UploadCloud className="w-10 h-10 text-blue-500 mb-2" />
        <span className="text-lg text-gray-700">Arrastra y suelta archivos aquí</span>
        <span className="text-xs text-gray-400 mt-1 mb-3">o haz clic para seleccionar</span>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple
          accept={FILE_TYPES.map(t => t.value).join(",")}
          onChange={e => handleFiles(e.target.files)}
        />
        <div className="flex gap-2 mt-3">
          {FILE_TYPES.map(type => (
            <span key={type.value} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">
              {type.icon}
              {type.label}
            </span>
          ))}
        </div>
      </div>

      {/* Previews de archivos */}
      {files.length > 0 && (
        <section className="bg-white border rounded-2xl p-4 mt-2 flex flex-col gap-4 shadow">
          <h2 className="font-semibold text-lg text-gray-800">Archivos seleccionados:</h2>
          <ul className="flex flex-col gap-3">
            {files.map((file, idx) => (
              <li key={file.name + idx} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileIcon file={file} />
                  <span className="font-medium">{file.name}</span>
                  <span className="text-xs text-gray-400 ml-2">({formatBytes(file.size)})</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setFiles(files.filter((_, i) => i !== idx))} disabled={uploading}>
                  <X className="w-5 h-5" />
                </Button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Progreso de subida */}
      {uploading && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-blue-600">
            <Loader2 className="animate-spin" /> Subiendo archivos...
          </div>
          <Progress value={progress} max={100} className="h-3 rounded-xl" />
        </div>
      )}

      {/* Errores */}
      {error && <div className="text-red-600 bg-red-100 px-4 py-2 rounded">{error}</div>}

      {/* Botón de subir */}
      <div className="flex justify-end gap-4">
        <Button
          onClick={uploadFiles}
          disabled={uploading || files.length === 0}
          className="px-8 text-base font-semibold"
        >
          {uploading ? "Subiendo..." : "Subir archivos"}
        </Button>
      </div>
    </main>
  );
}

// --- Componente para mostrar el icono del tipo de archivo
function FileIcon({ file }: { file: File }) {
  if (file.type.startsWith("image/")) return <Image className="w-6 h-6 text-blue-400" />;
  if (file.type.startsWith("video/")) return <Video className="w-6 h-6 text-purple-400" />;
  if (file.type.startsWith("audio/")) return <FileAudio className="w-6 h-6 text-green-400" />;
  if (file.type === "application/pdf") return <FileText className="w-6 h-6 text-red-400" />;
  return <FileText className="w-6 h-6 text-gray-400" />;
}

// --- Formatear bytes a tamaño legible
// formatting delegated to `src/lib/format.ts`
