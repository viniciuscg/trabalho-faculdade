function logar() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const users = JSON.parse(localStorage.getItem('users'))
 
    const logado = users.find(user => user.email === email && user.senha === senha)

    if (logado) {
        location.href = '/home-page'
        localStorage.setItem('usuarioLogado', JSON.stringify(logado))
        return
    }
    alert('Usuário ou senha incorretos')
}

document.addEventListener('keypress', function(e){ //fazendo com que o item seja adicionado na lista ao pressionar ENTER
    if (e.keyCode === 13){ //se Event.keycode for igual a 13 
        logar()
    }
})