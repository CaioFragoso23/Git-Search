const baseURL = "https://api.github.com/users/"
const myHeaders = {
    "Content-type": "application/json"
}

let users = JSON.parse(localStorage.getItem("Users")) || []
console.log(users)

async function verifyUsers(username){
        let usergot = await fetch(`https://api.github.com/users/${username}`, {
            method: 'GET',
            headers: myHeaders
        })
        // .then(response => response.json())
        .then((response) => {
            console.log(response)
             if(response.ok){
                response.json().then(responseJson => {
                    // let storageResponse = JSON.stringify(responseJson)
                    users.push(responseJson)
                    localStorage.setItem("username", `${username}`)
                    localStorage.setItem("Users", JSON.stringify(users))
                    
                    window.location.href = "/pages/profile/index.html"
                }
        )}
            
            else{
                response.json().then(response => {
                    let errorMsg = document.createElement('p')
                    let form = document.getElementsByClassName('form')[0]
                    
                    entrar.addEventListener('click', () => {
                        errorMsg.remove()
                    })
                    entrar.innerText = "Ver perfil do GitHub"
                    errorMsg.innerText = "Usuário Não Encontrado"
                    form.appendChild(errorMsg)
                    throw new Error(response.error)
                    
                })
                
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch((error) => {

            console.log(error)
        })
}

if(users.length > 3){
    let storagedUsers = localStorage.getItem("Users")
    let storagedUsersJson = JSON.parse(storagedUsers)
    console.log(storagedUsersJson)
    let newStoragedUsers = storagedUsersJson.splice(0,1)
    console.log(newStoragedUsers)
    console.log(storagedUsersJson)
    localStorage.setItem("Users",JSON.stringify(storagedUsersJson))
    
}