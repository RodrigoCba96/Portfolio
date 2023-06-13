// Función que aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(function(opcion) {
      opcion.classList.remove('seleccionado');
    });
    link.classList.add('seleccionado');
  
    // Hacemos desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
    var x = document.getElementById('nav');
    x.className = '';
  }
  
  // Función que muestra el menú responsive
  function responsiveMenu() {
    var x = document.getElementById('nav');
    if (x.className === '') {
      x.className = 'responsive';
    } else {
      x.className = '';
    }
  }
  
  // Detectar el desplazamiento para aplicar la animación de la barra de habilidades
  window.onscroll = function() {
    efectoHabilidades();
  };
  
  // Función que aplica la animación de la barra de habilidades
  function efectoHabilidades() {
    var skills = document.getElementById('skills');
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distanciaSkills >= 300) {
      document.getElementById('html').classList.add('barra-progreso1');
      document.getElementById('js').classList.add('barra-progreso2');
      document.getElementById('bd').classList.add('barra-progreso3');
      document.getElementById('ps').classList.add('barra-progreso4');
    }
  }
  const btn = document.querySelector('.btn-enviar');
const inputField = document.querySelector('.input-mitad');

inputField.addEventListener('input', function() {
  if (this.value.trim() !== '') {
    btn.disabled = false; // Habilitar el botón si el campo no está vacío
  } else {
    btn.disabled = true; // Deshabilitar el botón si el campo está vacío
  }
});

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  if (inputField.value.trim() === '') {
    alert('Por favor, completa el campo de texto antes de enviar el mensaje.');
    return;
  }

  btn.value = 'Enviando...';

  const serviceID = 'service_e88dq4c';
  const templateID = 'template_q9lng8j';
  emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    btn.value = 'Enviar Mensaje';
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
    document.querySelector('form').reset();
  })
  .catch((err) => {
    btn.value = 'Enviar Mensaje';
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  });
});