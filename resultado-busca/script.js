function buscar() {

    window.location.href = "/resultado-busca";
        
}

const users = JSON.parse(localStorage.getItem('users'))
console.log(users);
users.forEach(user => {
    document.querySelector('.container').innerHTML += `
        <div class="usuario">
            <img src="/img/icon-user.png" alt="">
            <h1>${user.nome}</h1>
            <p>${user.telefone}</p>
            <p>${user.endereco}</p>
        </div>
    `
});

function scrollToElement(id) {
    const element = document.getElementById(id)
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    })
}