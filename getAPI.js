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
        .then((response) => {return response.json()})
        .then((responseJson) => {
            if(responseJson.status === 200){
            currentUser += username
            window.location.href = "/pages/profile/index.html"
        }})
        .catch((error) => {
            let errorMsg = document.createElement('p')
            let form = document.getElementsByClassName('form')[0]

            errorMsg.innerText = "Usuário Não Encontrado"
            form.appendChild(errorMsg)
            console.log(error)
        })
}