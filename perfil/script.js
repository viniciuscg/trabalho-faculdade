const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const telefone = document.getElementById('telefone')
const matricula = document.getElementById('matricula')
const endereco = document.getElementById('endereco')
const tipo = document.querySelector('input[name="tipo"]:checked')

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

nome.value = usuarioLogado.nome
email.value = usuarioLogado.email
senha.value = usuarioLogado.senha
matricula.value = usuarioLogado.matricula
telefone.value = usuarioLogado.telefone
endereco.value = usuarioLogado.endereco
tipo.value = usuarioLogado.tipo

function atualizar() {
    
    const users = JSON.parse(localStorage.getItem('users'))
    const usuariosFiltrados = users.filter(user => user.email !== usuarioLogado.email)
    
    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        telefone: telefone.value,
        matricula: matricula.value,
        endereco: endereco.value,
    }

    usuariosFiltrados.push(usuario)

    localStorage.setItem('users', JSON.stringify(usuariosFiltrados))
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
}

function desativar() {
    const confirma = confirm('Tem certeza que deseja desativar a conta?')
    
    if (confirma) {
        const users = JSON.parse(localStorage.getItem('users'))
        const usuariosFiltrados = users.filter(user => user.email !== usuarioLogado.email)

        localStorage.setItem('users', JSON.stringify(usuariosFiltrados))
        
        localStorage.removeItem('usuarioLogado')

        alert('Conta desativada')
        location.href = '/home-page'


    }


}