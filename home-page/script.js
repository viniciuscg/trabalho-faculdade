function scrollToElement(id) {
    const element = document.getElementById(id)
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

if (usuarioLogado) {
    const cabecalhoDireita = document.getElementById('cabecalho-direita')
    cabecalhoDireita.innerHTML = `
        <button onclick='location.href = "/perfil"'>Perfil</button>
        <button onclick='sair()'>Sair</button>
    `
}

function sair() { 
    localStorage.setItem('usuarioLogado', null)
    location.reload()
}

function buscar() {

    window.location.href = "/resultado-busca";
        
}