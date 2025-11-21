import React, { useState } from 'react';
import { vscodeStyles, cn } from '../utils/vscodeStyles';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    // FALTABA ESTE STATE ↓
    const [messageStatus, setMessageStatus] = useState(''); // 'success', 'error', ''

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost/com.personal.website.backend/api/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            console.log('Response status:', response.status);
            
            const responseText = await response.text();
            console.log('Response text:', responseText);
            
            try {
                const data = JSON.parse(responseText);
                console.log('Parsed data:', data);
                
                if (data.success) {
                    setMessageStatus('success');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    setMessageStatus('error');
                }
            } catch (parseError) {
                console.log('JSON parse error:', parseError, 'Response was:', responseText);
                setMessageStatus('error');
            }
            
        } catch (error) {
            console.log('Fetch error:', error);
            setMessageStatus('error');
        }
    };

    return (
        <div className={cn('p-6 text-sm font-mono space-y-6', vscodeStyles.text.primary, vscodeStyles.bg.primary)}>
            <h2 className={cn('text-lg font-bold', vscodeStyles.ui.green)}>Contacto</h2>

            {/* AGREGÁ FEEDBACK AL USUARIO */}
            {messageStatus === 'success' && (
                <div className={cn('p-3 rounded', vscodeStyles.ui.green)}>
                    ¡Mensaje enviado correctamente!
                </div>
            )}
            {messageStatus === 'error' && (
                <div className={cn('p-3 rounded', vscodeStyles.ui.red)}>
                    Error al enviar el mensaje
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                {/* ... tus inputs igual ... */}
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