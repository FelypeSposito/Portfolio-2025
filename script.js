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



const targetsColor = document.querySelectorAll('.color-in-section');

const colorObserver = new IntersectionObserver((entries) => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add('colored');
      colorObserver.unobserve(item.target); // Só anima uma vez
    }
  });
}, {
  threshold: 0.20
});

targetsColor.forEach(el => {
  colorObserver.observe(el);
});




const targets50 = document.querySelectorAll('.fade-in-section-50');

const Observer50 = new IntersectionObserver((entries) => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add('blur-50');
      Observer50.unobserve(item.target); // Só anima uma vez
    }
  });
}, {
  threshold: 0.30
});

targets50.forEach(el => {
  Observer50.observe(el);
});





 window.addEventListener('load', () => {
    setTimeout(() => {
      const el = document.getElementById('BGcont1');
      if(el) {
        el.classList.add('blur-off');
      } else {
        console.error('#BGcont1 não encontrado');
      }
    }, 6500);
  });

//BLUR CONT1

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const conteudo = document.getElementById('conteudo');

  if (localStorage.getItem('pageLoaded') === 'true') {
    // Usuário já carregou a página antes, pula loader
    loader.style.display = 'none';
    conteudo.style.display = 'block';
  } else {
    // Primeira vez: mostra loader por 5s e depois esconde
    setTimeout(() => {
      loader.classList.add('fade-out');
      loader.addEventListener('transitionend', () => {
        loader.style.display = 'none';
        conteudo.style.display = 'block';

        // Marca no localStorage que já carregou
        localStorage.setItem('pageLoaded', 'true');
      }, { once: true });
    }, 6000);
  }
});

//LOADER







