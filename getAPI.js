const baseURL = "https://api.github.com/users/"
const myHeaders = {
    "Content-type": "application/json"
}

let currentUser = ""
let otherUsers = []

async function verifyUsers(username){
        currentUser = ""
        let usergot = await fetch(`https://api.github.com/users/${username}`, {
            method: 'GET',
            headers: myHeaders
        })
        .then((response) => {
            if(response.ok){
                let responseJson = response.json()
                currentUser = username
                otherUsers.push(responseJson)
                window.location.href = "/pages/profile/index.html"
            }
            else{
                response.json().then(response => {
                    let errorMsg = document.createElement('p')
                    let form = document.getElementsByClassName('form')[0]
                    
                    entrar.addEventListener('click', () => {
                        errorMsg.remove()
                    })
                    errorMsg.innerText = "Usuário Não Encontrado"
                    form.appendChild(errorMsg)
                    throw new Error(response.error)
                    
                })
                
            }
        })
        .then(response => {
            console.log(response)
            console.log(otherUsers)
            console.log(currentUser)
        })
        .catch((error) => {

            console.log(error)
        })
}