const Contact = () => {
  return (
    <div className="p-6 text-sm font-mono text-white bg-black space-y-6">
      <h2 className="text-green-400 text-lg font-bold">Contacto</h2>

      <form
        action="contact.php"
        method="POST"
        className="space-y-4 max-w-md"
      >
        <div>
          <label className="block text-purple-400 mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 bg-neutral-800 text-white rounded outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block text-purple-400 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 bg-neutral-800 text-white rounded outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block text-purple-400 mb-1">Mensaje</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full px-3 py-2 bg-neutral-800 text-white rounded outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-green-600 transition-all duration-300"
        >
          Enviar mensaje
        </button>
      </form>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/34680952590"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
      >
        📞 Llamar por WhatsApp
      </a>
    </div>
  );
};

export default Contact;