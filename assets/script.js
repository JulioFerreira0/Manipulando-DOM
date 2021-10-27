const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const bodyFooter = document.querySelectorAll('body, footer');

console.log(h1);

botao.addEventListener('click', () => {
    
    bodyFooter.forEach(e => {
        e.classList.toggle('dark-mode')
    });

    if(botao.className === 'dark-mode'){
        botao.innerHTML = 'Dark Mode';
        botao.classList.toggle('dark-mode');
        h1.innerHTML = 'Light Mode On';
        h1.classList.toggle('dark-mode');

    } else {
        botao.innerHTML = 'Light Mode';
        botao.classList.toggle('dark-mode');
        h1.innerHTML = 'Dark Mode On';
        h1.classList.toggle('dark-mode');
    }
})