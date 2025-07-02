import { FileItem } from "@/app/files/page";
import { Image, Video, FileText, FileAudio, Loader2, XCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FileCard({ file }: { file: FileItem }) {
  return (
    <div className="bg-white border rounded-2xl p-5 flex flex-col gap-3 shadow hover:shadow-lg transition group">
      <Link href={`/files/${file.id}`} className="flex flex-col items-center gap-3 cursor-pointer">
        <FilePreviewIcon file={file} />
        <div className="font-semibold text-gray-800 text-center truncate w-full">{file.name}</div>
      </Link>
      <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
        <span>{formatBytes(file.size)}</span>
        <span>{formatDate(file.createdAt)}</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <StatusBadge status={file.status} />
        <span className="ml-auto capitalize text-xs">{getTypeLabel(file.type)}</span>
      </div>
      <div className="flex gap-2 mt-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/files/${file.id}`}>Ver</Link>
        </Button>
        <Button variant="ghost" size="sm">
          Descargar
        </Button>
        <Button variant="ghost" size="sm">
          Eliminar
        </Button>
      </div>
    </div>
  );
}

function FilePreviewIcon({ file }: { file: FileItem }) {
  if (file.type.startsWith("image/")) return <img src={file.previewUrl} alt="" className="w-16 h-16 rounded-xl object-cover shadow" />;
  if (file.type.startsWith("video/")) return <Video className="w-16 h-16 text-purple-500" />;
  if (file.type.startsWith("audio/")) return <FileAudio className="w-16 h-16 text-green-500" />;
  if (file.type === "application/pdf") return <FileText className="w-16 h-16 text-red-500" />;
  return <FileText className="w-16 h-16 text-gray-400" />;
}

function StatusBadge({ status }: { status: FileItem["status"] }) {
  if (status === "completado")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-xl text-xs">
        <CheckCircle className="w-4 h-4" /> Completado
      </span>
    );
  if (status === "procesando")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-xl text-xs animate-pulse">
        <Loader2 className="w-4 h-4 animate-spin" /> Procesando
      </span>
    );
  if (status === "pendiente")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-xl text-xs">
        <Loader2 className="w-4 h-4" /> Pendiente
      </span>
    );
  if (status === "fallido")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-xl text-xs">
        <XCircle className="w-4 h-4" /> Fallido
      </span>
    );
  return null;
}

function getTypeLabel(type: string) {
  if (type.startsWith("image/")) return "Imagen";
  if (type.startsWith("video/")) return "Video";
  if (type.startsWith("audio/")) return "Audio";
  if (type === "application/pdf") return "PDF";
  return "Archivo";
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
}
