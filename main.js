document.addEventListener('DOMContentLoaded', () => {

  console.log('DOM READY');

  /* =====================
     BURGER MENU
  ===================== */
  const menuBtn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('myLinks');

  console.log('menuBtn:', menuBtn);
  console.log('menu:', menu);

  if (menuBtn && menu) {
    console.log('Burger menu initialized');

    menuBtn.addEventListener('click', () => {
      console.log('Burger menu clicked');

      const isOpen = menu.classList.toggle('active');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
  } else {
    console.log('Burger menu NOT found on this page');
  }

  /* =====================
     SKILLS SECTION
  ===================== */
  const skillTabs = document.querySelectorAll('.skills-tab');
  const skillPanels = document.querySelectorAll('.skills-panel');

  console.log('skillTabs count:', skillTabs.length);
  console.log('skillPanels count:', skillPanels.length);

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      console.log('Skill tab clicked:', tab.dataset.target);

      const target = tab.dataset.target;

      skillTabs.forEach(t => t.classList.remove('active'));
      skillPanels.forEach(p => p.classList.remove('active'));

      const panel = document.getElementById(`panel-${target}`);
      console.log('Target panel:', panel);

      panel?.classList.add('active');
      tab.classList.add('active');
    });
  });

  /* =====================
     ZOOM IMG
  ===================== */
  const previewImg = document.querySelector('.preview-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('img');

  console.log('previewImg:', previewImg);
  console.log('lightbox:', lightbox);
  console.log('lightboxImg:', lightboxImg);

  if (previewImg && lightbox && lightboxImg) {
    console.log('Lightbox initialized');

    previewImg.addEventListener('click', () => {
      console.log('Preview image clicked');

      lightboxImg.src = previewImg.src;
      lightbox.classList.add('active');
      console.log('Lightbox opened');
    });

    lightbox.addEventListener('click', () => {
      console.log('Lightbox clicked — closing');
      lightbox.classList.remove('active');
    });
  } else {
    console.log('Lightbox elements NOT found on this page');
  }

});