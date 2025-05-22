function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-6">
                <h2 className="text-3xl font-bold text-cyan-400">Contáctame</h2>

                <p className="text-gray-300">¿Quieres trabajar conmigo? ¡Estoy disponible para colaboraciones o preguntas!</p>

                <div className="space-y-4">
                    <a
                        href="https://wa.me/573001112233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full font-semibold transition"
                    >
                        WhatsApp
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=gonzalezvelezjosuedavid989@gmail.com&su=Contacto%20desde%20tu%20portafolio&body=Hola%20Josué%2C%20me%20interesa%20conocerte%20más%20y%20tu%20trabajo..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full font-semibold transition"
                    >
                        Enviar Gmail
                    </a>


                    <a
                        href="https://www.instagram.com/joshua_gonnza/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full font-semibold transition"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://www.facebook.com/jhosua.velez.2025/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full font-semibold transition"
                    >
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
