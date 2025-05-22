function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4">
      <div className="max-w-3xl text-center space-y-6">

        {/* Imagen arriba */}
        <img
          src="/github-pages/imagenes/aa.jpg"  // Cambia esta ruta por la ubicación real de tu imagen
          alt="Foto de Josué González"
          className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-cyan-500"
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          ¡Hola! Soy Josué González
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Desarrollador web apasionado por crear soluciones modernas, visuales y funcionales. Especializado en React, JavaScript y desarrollo backend con Python/FastAPI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#proyectos"
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
          >
            Ver Proyectos
          </a>
          <a
            href="https://wa.me/573218275703"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 font-semibold transition"
          >
            Contáctame
          </a>
          <a
            href="/github-pages/imagenes/CV.pdf"
            download="CV_Josue_Gonzalez.pdf"
            className="px-6 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 font-semibold transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
