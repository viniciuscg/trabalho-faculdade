function cadastrar() {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const matricula = document.getElementById('matricula').value
    const senha = document.getElementById('senha').value
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const tipo = document.querySelector('input[name="tipo"]:checked').value

    const users = JSON.parse(localStorage.getItem('users'))
    users.push({
        nome,
        email,
        matricula,
        senha,
        telefone,
        endereco,
        tipo,
    })

    localStorage.setItem('users', JSON.stringify(users))

    location.href = '/login'

}

const users = localStorage.getItem('users')
if (!users) {
    localStorage.setItem('users', '[]')
}