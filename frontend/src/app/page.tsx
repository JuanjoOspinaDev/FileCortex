import StatsOverview from "@/components/stats-overview";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto py-10 px-6 flex flex-col gap-8">
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-700">
          Bienvenido a FileCortex
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          Sube, procesa y gestiona tus archivos multimedia en la nube. Visualiza el estado de procesamiento en tiempo real, recibe notificaciones y explora tu galería inteligente.
        </p>
      </section>

      {/* Stats Overview */}
      <StatsOverview />

      {/* Call to action */}
      <section>
        <a
          href="/upload"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow hover:bg-blue-700 transition text-lg"
        >
          Comienza subiendo tu primer archivo &rarr;
        </a>
      </section>
    </main>
  );
}
