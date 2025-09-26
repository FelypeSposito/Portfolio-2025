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

  // Cria texto sobreposto no mobile
  if (isMobile) {
    const textoSobreposto = document.createElement('div');
    textoSobreposto.className = 'texto-sobreposta';
    textoSobreposto.textContent = textos[id];
    item.appendChild(textoSobreposto);
  }

  // Hover (desktop)
  item.addEventListener('mouseenter', () => {
    if (!isMobile) {
      wrapper.classList.add('hovering');
      texto.setAttribute('data-ativo', id);
    }
  });

  item.addEventListener('mouseleave', () => {
    if (!isMobile) {
      setTimeout(() => {
        wrapper.classList.remove('hovering');
        texto.removeAttribute('data-ativo');
      }, 150);
    }
  });

  // Clique (mobile)
  if (isMobile) {
    item.addEventListener('click', (e) => {
      e.stopPropagation(); // evita conflito
      const isActive = item.classList.contains('ativo');
      items.forEach(i => i.classList.remove('ativo'));
      
      if (!isActive) {
        item.classList.add('ativo');
        wrapper.classList.add('hovering');
        texto.setAttribute('data-ativo', id);
      } else {
        wrapper.classList.remove('hovering');
        texto.removeAttribute('data-ativo');
      }
    });
  }
});

// Fechar descrição ao clicar fora (mobile)
if (isMobile) {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.item')) {
      items.forEach(i => i.classList.remove('ativo'));
      wrapper.classList.remove('hovering');
      texto.removeAttribute('data-ativo');
    }
  });
}


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


//COLORE QUANDO O CONTAINER ESTIVER 50% VISIVEL
const targetsColor = document.querySelectorAll('.color-in-section');

const colorObserver = new IntersectionObserver((entries) => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add('colored');
      colorObserver.unobserve(item.target); // Só anima uma vez
    }
  });
}, {
  threshold: 0.50
});

targetsColor.forEach(el => {
  colorObserver.observe(el);
});
//











//BLUR INICIAL - BORRÃO PÓS LOADER
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

const elemento1 = document.getElementById('frase');
const elemento2 = document.getElementById('sombras');
const elemento3 = document.getElementById('cor');
const elemento4 = document.getElementById('textura');
const elemento5 = document.getElementById('curvaDeLuz');
const container2 = document.getElementById('container2');

// função auxiliar para limpar classes
function resetBackground() {
  container2.classList.remove(
    'trocar-bgExposicao',
    'trocar-bgSombras',
    'trocar-bgCor',
    'trocar-bgTextura',
    'trocar-bgFinalizado'
  );
  container2.classList.add('container2');
}

// função que ativa determinada classe
function ativarClasse(classe) {
  resetBackground();
  setTimeout(() => {
    container2.classList.remove('container2');
    container2.classList.add(classe);
  }, 500);
}

/* ---------------------------
   Eventos para desktop (hover)
---------------------------- */
elemento1.addEventListener('mouseenter', () => ativarClasse('trocar-bgExposicao'));
elemento1.addEventListener('mouseleave', resetBackground);

elemento2.addEventListener('mouseenter', () => ativarClasse('trocar-bgSombras'));
elemento2.addEventListener('mouseleave', resetBackground);

elemento3.addEventListener('mouseenter', () => ativarClasse('trocar-bgCor'));
elemento3.addEventListener('mouseleave', resetBackground);

elemento4.addEventListener('mouseenter', () => ativarClasse('trocar-bgTextura'));
elemento4.addEventListener('mouseleave', resetBackground);

/* ---------------------------
   Eventos para mobile (toque)
---------------------------- */
[elemento1, elemento2, elemento3, elemento4].forEach((el) => {
  el.addEventListener('click', () => {
    if (el === elemento1) ativarClasse('trocar-bgExposicao');
    if (el === elemento2) ativarClasse('trocar-bgSombras');
    if (el === elemento3) ativarClasse('trocar-bgCor');
    if (el === elemento4) ativarClasse('trocar-bgTextura');
  });
});

// se clicar fora dos elementos, reseta
document.addEventListener('click', (e) => {
  if (
    !e.target.closest('#frase') &&
    !e.target.closest('#sombras') &&
    !e.target.closest('#cor') &&
    !e.target.closest('#textura')
  ) {
    resetBackground();
  }
});


        //Mouse enter na frase Finalizado
//Elementos que vao excluidos com o mouseenter no ultimo elem

const dispNon1 = document.getElementById('contDivBarraFoto')
const dispNon2 = document.getElementById('barraBranca1')
const dispNon3 = document.getElementById('barraBranca2')

//Opacidade de certos elementos quando passar o mouse por 
//cima do "Finalizado"


//Elemento que vai ser apagado por alguns segundos e voltar
const header1 = document.getElementById('navGeralHeader');


    elemento5.addEventListener('mouseenter', () => {

        setTimeout(() => {
  container2.classList.remove('container2');
container2.classList.add('trocar-bgFinalizado');
dispNon1.classList.add('none');
dispNon2.classList.add('none');
dispNon3.classList.add('none');
}, 500);

    });

sections.forEach(section => {
  observer.observe(section);
});

const interativo = document.getElementById('interativo');
const interativoDiv = document.getElementById('espacoInteracao')

const IntObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const ratio = entry.intersectionRatio;

    // Quando 40% visível ou mais, adiciona a classe 'teste'
    if (ratio >= 0.4) {
      espacoInteracao.classList.add('fundoBranco');
      espacoInteracao.classList.remove('borda20px');
      espacoInteracao.classList.add('borda50px');
      espacoInteracao.classList.add('tamanhoONInteracao');
      espacoInteracao.classList.remove('tamanhoInicialInteracao');
      setTimeout(() => {
        interativo.classList.remove('opacidade0');
        interativo.classList.add('opacidade100');

}, 500);

//Comfortaa bebas neue 

    }
        if (ratio >= 0.6) {
          setTimeout(() => {
            setTimeout(() => {
            espacoInteracao.classList.add('tamanhoInicialInteracao');
            espacoInteracao.classList.remove('tituloInterativoON');
            }, 2000);
            espacoInteracao.classList.add('opacidade0');
}, 3500);
      
    }
    
  });
}, {
  threshold: Array.from({length:101}, (_,i)=>i/100)
});

// Observa o container que contém o interativo
IntObserver.observe(document.getElementById('container2'));


const menuToggle = document.getElementById("menuToggle");
const navHeader = document.getElementById("navHeader");

menuToggle.addEventListener("click", () => {
  navHeader.classList.toggle("active");
});


// ANIMACAO ONCLICK PORTEFOLIO MOBILE



// variável renomeada para não conflitar
const isMobileC3 = window.matchMedia("(max-width: 900px)").matches;

const grow1 = document.getElementById('grow1C3');
const grow4 = document.getElementById('grow4C3');

// função auxiliar para adicionar/remover classe de hover simulada
function toggleHover(el) {
  const isActive = el.classList.contains('hovered');
  el.classList.remove('hovered'); // remove de todos
  if (!isActive) el.classList.add('hovered'); // adiciona só no clicado
}

// Desktop → mantém hover natural
// Mobile → click simula hover
if (isMobileC3) {
  [grow1, grow4].forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleHover(el);
    });
  });

  // clicar fora remove hover
  document.addEventListener('click', () => {
    grow1.classList.remove('hovered');
    grow4.classList.remove('hovered');
  });
}
