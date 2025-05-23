import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="max-w-3xl text-center space-y-6"
      >
        <motion.img
          src="/github-pages/imagenes/aa.jpg"
          alt="Foto de Josué González"
          className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-cyan-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          ¡Hola! Soy Josué González
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Desarrollador web apasionado por crear soluciones modernas.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 font-semibold transition"
          >
            Ver Proyectos
          </motion.a>

          <motion.a
            href="https://wa.me/573218275703"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 font-semibold transition"
          >
            Contáctame
          </motion.a>

          <motion.a
            href="/github-pages/imagenes/CV.pdf"
            download="CV_Josue_Gonzalez.pdf"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 font-semibold transition"
          >
            Descargar CV
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
