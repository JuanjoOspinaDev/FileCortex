import { Image, Video, FileAudio, FileText } from "lucide-react";

export default function StatsOverview() {
  const stats = [
    { label: "Archivos Subidos", value: 243, icon: <Image className="w-6 h-6" /> },
    { label: "Videos Procesados", value: 55, icon: <Video className="w-6 h-6" /> },
    { label: "Audios Transcritos", value: 27, icon: <FileAudio className="w-6 h-6" /> },
    { label: "PDFs Analizados", value: 41, icon: <FileText className="w-6 h-6" /> },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border rounded-2xl p-5 flex flex-col items-center shadow transition hover:shadow-md"
        >
          <div className="mb-2 text-blue-600">{stat.icon}</div>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-xs text-gray-500">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
