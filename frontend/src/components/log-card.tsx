import { LogItem } from "@/app/logs/page";
import Link from "next/link";
import { CheckCircle, XCircle, FileText, Image, Video, FileAudio, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { useState } from "react";

export function LogCard({ log }: { log: LogItem }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="bg-white border rounded-2xl px-5 py-4 flex flex-col gap-1 shadow hover:shadow-md transition group">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
        <Link href={`/files/${log.fileId}`} className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
          <FileTypeIcon type={log.fileType} />
          <span className="truncate">{log.fileName}</span>
        </Link>
        <span className="ml-auto flex gap-1 items-center text-xs">
          <ProcessBadge process={log.process} />
          <StatusBadge status={log.status} />
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-1">
        <span className="text-gray-700">{log.message}</span>
        <span className="ml-auto text-gray-400 text-xs">{formatDateTime(log.createdAt)}</span>
      </div>
      {log.details && (
        <button
          className="flex items-center gap-1 text-blue-500 text-xs mt-1 hover:underline"
          onClick={() => setShowDetails(v => !v)}
        >
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {showDetails ? "Ocultar detalles" : "Ver detalles"}
        </button>
      )}
      {showDetails && log.details && (
        <pre className="bg-gray-100 rounded p-3 text-xs text-gray-700 mt-2 overflow-x-auto max-h-52">{log.details}</pre>
      )}
    </li>
  );
}

function FileTypeIcon({ type }: { type: string }) {
  if (type.startsWith("image/")) return <Image className="w-5 h-5 text-blue-400" />;
  if (type.startsWith("video/")) return <Video className="w-5 h-5 text-purple-400" />;
  if (type.startsWith("audio/")) return <FileAudio className="w-5 h-5 text-green-400" />;
  if (type === "application/pdf") return <FileText className="w-5 h-5 text-red-400" />;
  return <FileText className="w-5 h-5 text-gray-400" />;
}

function StatusBadge({ status }: { status: LogItem["status"] }) {
  if (status === "exito")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-xl text-xs">
        <CheckCircle className="w-4 h-4" /> Éxito
      </span>
    );
  if (status === "fallo")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-xl text-xs">
        <XCircle className="w-4 h-4" /> Fallo
      </span>
    );
  return null;
}

function ProcessBadge({ process }: { process: string }) {
  const label =
    process === "thumbnail"
      ? "Miniatura"
      : process === "ocr"
      ? "OCR"
      : process === "transcripcion"
      ? "Transcripción"
      : process;
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-xl text-xs">
      <Zap className="w-4 h-4" /> {label}
    </span>
  );
}

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
