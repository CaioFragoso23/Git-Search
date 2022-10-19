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
    verifyUsers(`${inputNomeUsuario.value}`)
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

function pastPages(){
    let visitedUsers = getLocalStorageUsers()
    let pastUsersContainer = document.getElementById('pastUsers')
    let pastUserTitle = document.createElement('p')
    pastUserTitle.innerText = "Achados Recentemente:"
    pastUsersContainer.appendChild(pastUserTitle)
    visitedUsers.forEach((user) => {

        let pastUserCard = document.createElement('li')
        let pastUserImg = document.createElement('img')


        pastUserImg.addEventListener('click', () => {
            localStorage.setItem("username", user.login)
            window.location.href = "./pages/profile/index.html"
        })

        pastUserImg.src = user.avatar_url
        pastUserImg.classList = "pastUserImg"
        pastUserCard.classList = "pastUserCard"
        pastUserCard.appendChild(pastUserImg)
        pastUsersContainer.appendChild(pastUserCard)
    })

}
pastPages()

