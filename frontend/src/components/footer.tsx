export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-2 text-sm text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} FileCortex. Todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          <a href="/about" className="hover:underline">Acerca de</a>
          <a href="https://github.com/tuusuario/tu-repo" target="_blank" rel="noopener" className="hover:underline">
            GitHub
          </a>
          <a href="/privacy" className="hover:underline">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
