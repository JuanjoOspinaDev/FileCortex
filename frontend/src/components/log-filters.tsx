const STATUS_OPTIONS = [
  { label: "Todos", value: "all" },
  { label: "Éxito", value: "exito" },
  { label: "Fallo", value: "fallo" },
];

const PROCESS_OPTIONS = [
  { label: "Todos", value: "all" },
  { label: "Miniatura", value: "thumbnail" },
  { label: "OCR", value: "ocr" },
  { label: "Transcripción", value: "transcripcion" },
];

export function LogFilters({
  filters,
  setFilters,
}: {
  filters: { status: string; process: string };
  setFilters: (f: { status: string; process: string }) => void;
}) {
  return (
    <div className="flex gap-2 items-center">
      <select
        className="border rounded-xl px-3 py-2 text-sm text-gray-700 bg-white"
        value={filters.status}
        onChange={e => setFilters({ ...filters, status: e.target.value })}
      >
        {STATUS_OPTIONS.map(opt => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <select
        className="border rounded-xl px-3 py-2 text-sm text-gray-700 bg-white"
        value={filters.process}
        onChange={e => setFilters({ ...filters, process: e.target.value })}
      >
        {PROCESS_OPTIONS.map(opt => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
