/* BURGER MENU */

const menuBtn = document.querySelector('.menu-toggle');
const menu = document.getElementById('myLinks');

menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
});

/* SKILLS SECTION */
const skillTabs = document.querySelectorAll('.skills-tab');
const skillPanels = document.querySelectorAll('.skills-panel');

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        skillTabs.forEach(t => t.classList.remove('active'));
        skillPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(`panel-${target}`).classList.add('active');
    });
});