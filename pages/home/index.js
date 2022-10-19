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
    let loading = document.createElement('div')
    let img = document.createElement('img')
    console.log(verifyUsers(`${inputNomeUsuario.value}`))
    loading.classList.add("button-brand-active")
    img.src = './assets/img/spinner.svg'
    
    entrar.innerHTML = ''
    loading.appendChild(img)
    entrar.appendChild(loading)    
})

function getLocalStorageUsers(){
    let users = localStorage.getItem("Users")
    let getUsers = JSON.parse(users)
    return getUsers
}
getLocalStorageUsers()

// function pastPages(){
//     let visitedUsers = getLocalStorageUsers()
//     visitedUsers.forEach((user) => {
//         let pastUsersContainer = document.getElementById('pastUsers')
//         let pastUserCard = document.createElement('li')
//         let pastUserImg = document.createElement('img')

//         pastUserImg.src = user.avatar_url
//         pastUserCard.appendChild(pastUserImg)
//         pastUsersContainer.appendChild(pastUserCard)
//     })


// }


