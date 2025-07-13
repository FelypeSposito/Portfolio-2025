
  const wrapper = document.getElementById('galeriaWrapper');
  const galeria = document.getElementById('galeria');
  const texto = document.getElementById('texto');
  const items = galeria.querySelectorAll('.item');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      wrapper.classList.add('hovering');
      const id = item.getAttribute('data-id');
      texto.setAttribute('data-ativo', id);
    });

    item.addEventListener('mouseleave', () => {
      wrapper.classList.remove('hovering');
      texto.removeAttribute('data-ativo');
    });
  });