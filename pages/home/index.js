/* Desenvolva sua lógica aqui...*/
const entrar = document.getElementById('entrar')
const inputNomeUsuario = document.getElementById('nomeUsuario')

inputNomeUsuario.addEventListener('input', () => {
    let textoInput = inputNomeUsuario.value

    if(textoInput !== '' && textoInput !== null){
        entrar.disabled = false
    }
    else{
        entrar.disabled = true
    }
})

entrar.addEventListener('click', (event) => {
event.preventDefault()
console.log(verifyUsers(`${inputNomeUsuario.value}`))

})

