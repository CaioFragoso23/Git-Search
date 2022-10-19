const baseURL = "https://api.github.com/users/"
const myHeaders = {
    "Content-type": "application/json"
}



async function verifyUsers(username){
        let usergot = await fetch(`https://api.github.com/users/${username}`, {
            method: 'GET',
            headers: myHeaders
        })
        .then((response) => {
             if(response.ok){
                response.json().then(responseJson => {
                    let storageResponse = JSON.stringify(responseJson)
                    localStorage.setItem("username", `${username}`)
                    localStorage.setItem("Users", [`${storageResponse}`])
                    
                    window.location.href = "/pages/profile/index.html"
                })

            }
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