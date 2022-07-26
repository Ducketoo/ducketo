const input = document.querySelector('#name');
const form = document.querySelector('.login');


const handleSubmit = (event) => {
    event.preventDefault(); // Cancelar refresh padrão do form

    localStorage.setItem('player', input.value); // Armazenar nome do player
    window.location = 'significor.html' // Redirecionar para página
}

form.addEventListener('submit', handleSubmit);