const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-2 text-sm text-gray-500 dark:text-gray-400">
        <div>
          &copy; {year} FileCortex. Todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          <a href="/about" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition">Acerca de</a>
          <a href="https://github.com/tuusuario/tu-repo" target="_blank" rel="noopener" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition">
            GitHub
          </a>
          <a href="/privacy" className="hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
