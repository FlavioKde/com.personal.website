import React, { useState } from 'react';
import { vscodeStyles, cn } from '../utils/vscodeStyles';

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
    <div className={cn('p-6 text-sm font-mono space-y-6', vscodeStyles.text.primary, vscodeStyles.bg.primary)}>
      <h2 className={cn('text-lg font-bold', vscodeStyles.ui.green)}>Contacto</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className={cn('block mb-1', vscodeStyles.ui.purple)}>Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className={cn(vscodeStyles.components.input.base, vscodeStyles.components.input.focus)}
          />
        </div>

        <div>
          <label className={cn('block mb-1', vscodeStyles.ui.purple)}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className={cn(vscodeStyles.components.input.base, vscodeStyles.components.input.focus)}
          />
        </div>
        <div>
          <label className={cn('block mb-1', vscodeStyles.ui.purple)}>Asunto</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            required
            className={cn(vscodeStyles.components.input.base, vscodeStyles.components.input.focus)}
          />
        </div>

        <div>
          <label className={cn('block mb-1', vscodeStyles.ui.purple)}>Mensaje</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            className={cn(vscodeStyles.components.input.base, vscodeStyles.components.input.focus)}
          ></textarea>
        </div>

        <button
            type="submit"
            className={cn(vscodeStyles.components.button.base, vscodeStyles.components.button.primary)}
          >
            Enviar mensaje
        </button>

            </form>
        <a
          href="https://wa.me/34680952590"
          target="_blank"
          rel="noopener noreferrer"
          className={cn('inline-block mt-4', vscodeStyles.components.button.base, vscodeStyles.components.button.primary)}
        >
          Llamar por WhatsApp
        </a>
    </div>
  );
};

export default Contact;