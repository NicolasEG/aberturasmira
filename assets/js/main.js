const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
const header = document.querySelector('.site-header');

if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const nombre = data.get('nombre');
    const telefono = data.get('telefono');
    const servicio = data.get('servicio');
    const mensaje = data.get('mensaje');

    const texto = `Hola, soy ${nombre}.%0AEstoy interesado/a en: ${servicio}.%0AMi teléfono es: ${telefono}.%0AConsulta: ${mensaje}`;
    const numero = '549XXXXXXXXXX';
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
  });
}
