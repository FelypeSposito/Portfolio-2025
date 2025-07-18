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
