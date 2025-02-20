
function mostrarInfo(item) {
  const infoContainer = document.getElementById('info-container');
  const imagenInfo = document.getElementById('imagen-info');
  const tituloInfo = document.getElementById('titulo-info');
  const descripcionInfo = document.getElementById('descripcion-info');

  infoContainer.style.display = 'flex';

  switch (item) {
    case 'pasarela':
      imagenInfo.src = 'https://img.freepik.com/foto-gratis/mujer-punk-tiro-completo-posando_23-2149267430.jpg?ga=GA1.1.224406576.1739317487&semt=ais_hybrid';
      tituloInfo.textContent = 'Pasarela/corrección de postura';
      descripcionInfo.innerHTML = `
        <div class="column">
          <p>Aprende a dominar el arte de la pasarela y proyecta seguridad y confianza en cada paso. Este curso te enseñará técnicas de postura, movimiento y expresión corporal para destacar en cualquier evento o presentación.</p>
          <p>Además, recibirás consejos personalizados para corregir tu postura y mejorar tu lenguaje corporal, lo que te ayudará a prevenir lesiones y a sentirte más cómodo y seguro en tu día a día.</p>
        </div>
        
      `;
      break;
    case 'expresion':
      imagenInfo.src = 'https://img.freepik.com/foto-gratis/misma-mujer-varias-posturas_1149-1065.jpg?ga=GA1.1.224406576.1739317487&semt=ais_hybrid';
      tituloInfo.textContent = 'Expresión corporal';
      descripcionInfo.innerHTML = `
        <div class="column">
          <p>Esta clase te ayudará a soltar y afrontar tus miedos e inseguridades ante el público, potenciando tus capacidades artísticas y creativas; así podrás transmitir seguridad por medio de tu cuerpo.</p>
          <p>A través de ejercicios prácticos y dinámicas grupales, aprenderás a conectar con tus emociones y a expresarlas de forma auténtica y natural, lo que te permitirá comunicar tus ideas con mayor claridad y convicción.</p>
        </div>
      `;
      break;
    case 'automaquillaje':
      imagenInfo.src = 'https://img.freepik.com/foto-gratis/video-maquillaje-filmacion-vlogger-femenina_273609-10913.jpg?ga=GA1.1.224406576.1739317487&semt=ais_hybrid';
      tituloInfo.textContent = 'Automaquillaje';
      descripcionInfo.innerHTML = `
        <div class="column">
          <p>Aprende a resaltar tu belleza natural y a crear looks impactantes para cualquier ocasión. Este curso te enseñará técnicas de maquillaje profesional y te brindará herramientas para elegir los productos adecuados para tu tipo de piel y rostro.</p>
          <p>Descubre los secretos de los expertos y aprende a maquillarte como un profesional, desde la preparación de la piel hasta la aplicación de sombras, delineador, labial y otros productos.</p>
        </div>
      `;
      break;
    case 'foto':
      imagenInfo.src = 'https://www.belkyarizala.com/wp-content/uploads/2024/09/Foto-Pose-Belky-arizala-Escuela.jpg';
      tituloInfo.textContent = 'Foto-pose';
      descripcionInfo.innerHTML = `
        <div class="column.foto">
          <p>Domina el arte de posar ante la cámara y aprende a sacarle el máximo partido a tu imagen. Este curso te enseñará técnicas de modelaje y expresión corporal para que tus fotos luzcan espectaculares.</p>
          <p>Descubre cómo posar de forma natural y espontánea, cómo jugar con la iluminación y los ángulos, y cómo transmitir emociones y personalidad a través de tus fotos.</p>
        </div>
        
      `;
      break;
    case 'fogueo':
      imagenInfo.src = 'https://img.freepik.com/foto-gratis/mujer-sonriente-tiro-medio-microfono_23-2149267776.jpg?ga=GA1.1.224406576.1739317487&semt=ais_hybrid';
      tituloInfo.textContent = 'Fogueo periodístico';
      descripcionInfo.innerHTML = `
        <div class="column">
          <p>Adquiere las herramientas necesarias para desenvolverte con seguridad y eficacia ante los medios de comunicación. Este curso te enseñará técnicas de oratoria, lenguaje corporal y comunicación persuasiva para que puedas transmitir tus ideas de forma clara y convincente.</p>
          <p>Aprende a responder preguntas difíciles, a manejar situaciones de presión y a construir una imagen positiva ante los medios, lo que te permitirá alcanzar tus metas profesionales y personales.</p>
        </div>
      `;
      break;
  }
}
