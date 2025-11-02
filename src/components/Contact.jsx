import React, { useState } from 'react';

const Contact = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost/com.personal.website.backend/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                alert('¡Mensaje enviado!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            alert('Error de conexión');
        }
    };

  return (
    <div className="p-6 text-sm font-mono text-white bg-black space-y-6">
      <h2 className="text-green-400 text-lg font-bold">Contacto</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-purple-400 mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="w-full px-3 py-2 bg-neutral-800 text-white rounded outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block text-purple-400 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="w-full px-3 py-2 bg-neutral-800 text-white rounded outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-purple-400 mb-1">Asunto</label>
          <input
          type="text"
          name="subject"
          value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
          required
          className="w-full px-3 py-2 bg-neutral-800 text-white rounded outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div>
          <label className="block text-purple-400 mb-1">Mensaje</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            className="w-full px-3 py-2 bg-neutral-800 text-white rounded outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
        </div>

        <button
            type="submit"
            className="px-4 py-2 bg-neutral-800 text-purple-400 font-mono rounded hover:bg-neutral-700 hover:text-purple-300 transition-all duration-300"
          >
            Enviar mensaje
        </button>

            </form>
        <a
          href="https://wa.me/34680952590"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-neutral-800 text-purple-400 font-mono rounded hover:bg-neutral-700 hover:text-purple-300 transition-all duration-300"
        >
          Llamar por WhatsApp
        </a>
    </div>
  );
};

export default Contact;