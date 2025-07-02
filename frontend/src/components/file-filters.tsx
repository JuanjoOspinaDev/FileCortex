import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const TYPE_OPTIONS = [
  { label: "Todos", value: "all" },
  { label: "Imágenes", value: "image" },
  { label: "Videos", value: "video" },
  { label: "Audios", value: "audio" },
  { label: "PDF", value: "application/pdf" },
];

const STATUS_OPTIONS = [
  { label: "Todos", value: "all" },
  { label: "Pendiente", value: "pendiente" },
  { label: "Procesando", value: "procesando" },
  { label: "Completado", value: "completado" },
  { label: "Fallido", value: "fallido" },
];

export function FileFilters({
  filters,
  setFilters,
}: {
  filters: { type: string; status: string };
  setFilters: (f: { type: string; status: string }) => void;
}) {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <select
          className="border rounded-xl px-3 py-2 text-sm text-gray-700 bg-white"
          value={filters.type}
          onChange={e =>
            setFilters({ ...filters, type: e.target.value })
          }
        >
          {TYPE_OPTIONS.map(opt => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="border rounded-xl px-3 py-2 text-sm text-gray-700 bg-white"
          value={filters.status}
          onChange={e =>
            setFilters({ ...filters, status: e.target.value })
          }
        >
          {STATUS_OPTIONS.map(opt => (
            <option value={opt.value} key={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
