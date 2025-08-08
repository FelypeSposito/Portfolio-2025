  const wrapper = document.getElementById('galeriaWrapper');
  const galeria = document.getElementById('galeria');
  const texto = document.getElementById('texto');
  const items = galeria.querySelectorAll('.item');

  const textos = {
    1: 'Imagem RAW',
    2: 'Imagem Tratada',
    3: 'Imagem RAW',
    4: 'Imagem Tratada',
  };

  const isMobile = window.matchMedia("(max-width: 900px)").matches;

  items.forEach(item => {
    const id = item.getAttribute('data-id');

    if (isMobile) {
      const textoSobreposto = document.createElement('div');
      textoSobreposto.className = 'texto-sobreposta';
      textoSobreposto.textContent = textos[id];
      item.appendChild(textoSobreposto);
    }

    // Hover para desktop
    item.addEventListener('mouseenter', () => {
      if (!isMobile) {
        wrapper.classList.add('hovering');
        texto.setAttribute('data-ativo', id);
      }
    });

    item.addEventListener('mouseleave', () => {
      if (!isMobile) {
        wrapper.classList.remove('hovering');
        texto.removeAttribute('data-ativo');
      }
    });

    // Clique para mobile
    item.addEventListener('click', () => {
      if (isMobile) {
        const isActive = item.classList.contains('ativo');
        items.forEach(i => i.classList.remove('ativo'));
        if (!isActive) {
          item.classList.add('ativo');
        }
      }
    });
  });


  const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Anima apenas uma vez
    }
  });
}, {
  threshold: 0.15 // Começa a animar quando 15% estiver visível
});

sections.forEach(section => {
  observer.observe(section);
});




 window.addEventListener('load', () => {
    setTimeout(() => {
      const el = document.getElementById('BGcont1');
      if(el) {
        el.classList.add('blur-off');
      } else {
        console.error('#BGcont1 não encontrado');
      }
    }, 500);
  });

