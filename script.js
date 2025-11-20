// Navegación y menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Manejo del menú hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Inicializar formulario de WhatsApp
    initWhatsAppForm();
});

// Función para enviar formulario a WhatsApp
function initWhatsAppForm() {
    const contactForm = document.getElementById('form-contacto');
    
    if (contactForm) {
        // Eliminar cualquier event listener anterior
        contactForm.replaceWith(contactForm.cloneNode(true));
        const newForm = document.getElementById('form-contacto');
        
        newForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const programa = document.getElementById('programa').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Validar campos obligatorios
            if (!nombre || !email || !telefono || !programa || !mensaje) {
                alert('❌ Por favor, completa todos los campos obligatorios.');
                return false;
            }
            
            // Crear mensaje para WhatsApp
            const textoWhatsApp = `
*SOLICITUD DE INFORMACIÓN - HCU CHILE* 📚

*Datos del interesado:*
🔹 *Nombre:* ${nombre}
🔹 *Email:* ${email}  
🔹 *Teléfono:* ${telefono}
🔹 *Programa de interés:* ${programa}

*Mensaje:*
${mensaje}

*Fecha:* ${new Date().toLocaleDateString('es-CL')}

¡Solicito más información sobre este programa! 🙏
            `.trim();
            
            // Número de WhatsApp
            const numeroWhatsApp = '56961269607';
            
            // Crear URL de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
            
            // Mensaje de instrucciones
            alert(`📱 ¡LISTO! Se abrirá WhatsApp\n\nIMPORTANTE:\n1. Verifica que el mensaje esté completo\n2. Presiona el botón ENVIAR (flecha verde)\n3. ¡Te contactaremos pronto!`);
            
            // Abrir WhatsApp
            window.open(urlWhatsApp, '_blank');
            
            // Limpiar formulario
            newForm.reset();
            
            return false;
        });
    }
    // Función para el popup de métodos de pago
function initPaymentPopup() {
    const pagoBtn = document.getElementById('btn-pago');
    const pagoPopup = document.getElementById('popup-pago');
    const closePago = document.getElementById('close-pago');
    
    if (pagoBtn && pagoPopup) {
        // Abrir popup
        pagoBtn.addEventListener('click', function() {
            pagoPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Cerrar popup
        closePago.addEventListener('click', function() {
            pagoPopup.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Cerrar al hacer click fuera del popup
        pagoPopup.addEventListener('click', function(e) {
            if (e.target === pagoPopup) {
                pagoPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Cerrar con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && pagoPopup.classList.contains('active')) {
                pagoPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Llamar la función en DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... tu código existente ...
    
    // Inicializar popup de métodos de pago
    initPaymentPopup();
});
// Función para cerrar el popup
function cerrarPopup() {
    const pagoPopup = document.getElementById('popup-pago');
    if (pagoPopup) {
        pagoPopup.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Función para el popup de métodos de pago
function initPaymentPopup() {
    const pagoBtn = document.getElementById('btn-pago');
    const pagoPopup = document.getElementById('popup-pago');
    const closePago = document.getElementById('close-pago');
    
    if (pagoBtn && pagoPopup) {
        // Abrir popup
        pagoBtn.addEventListener('click', function() {
            pagoPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Cerrar popup
        closePago.addEventListener('click', cerrarPopup);
        
        // Cerrar al hacer click fuera del popup
        pagoPopup.addEventListener('click', function(e) {
            if (e.target === pagoPopup) {
                cerrarPopup();
            }
        });
        
        // Cerrar con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && pagoPopup.classList.contains('active')) {
                cerrarPopup();
            }
        });
    }
}

// Llamar la función en DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... tu código existente ...
    
    // Inicializar popup de métodos de pago
    initPaymentPopup();
});
}
