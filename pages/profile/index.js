/* Desenvolva sua lógica aqui...*/
async function renderHeader(obj){
    const data = await fetch(`https://api.github.com/users/${obj}`)
    const dataJson = await data.json()

    let imgDev = document.getElementById('imgDev')
    let nameDev = document.getElementById('nameDev')
    let stackDev = document.getElementById('stackDev')
    let emailUser = document.getElementById('emailUser')

    imgDev.src = dataJson.avatar_url
    nameDev.innerText = dataJson.login
    stackDev.innerText = "Estudante Kenzie"
    emailUser.addEventListener('click', () => {
        // window.location.href = email do usuário
    })
}
let switchUser = document.getElementById('switchUser')
switchUser.addEventListener('click', () => {
    window.location.href = "/index.html"
})
async function renderMain(arr){
    const data = await fetch(`https://api.github.com/users/${arr}/repos`)
    const dataJson = await data.json()
    let cardsContainer = document.getElementsByClassName('cardsContainer')[0]

    dataJson.forEach(element => {
        let projectCard = document.createElement('li')
        let projectName = document.createElement('h1')
        let projectInfo = document.createElement('p')
        let projectRepo = document.createElement('div')
        let repoButton = document.createElement('button')
        let demoButton = document.createElement('button')
        
        projectCard.classList = "projectCard"
        projectName.innerText = element.name
        projectInfo.innerText = element.description

        repoButton.innerText = "Repositório"
        repoButton.classList = "button-tag-1"
        demoButton.innerText = "Demo"
        demoButton.classList = "button-tag-1"

        repoButton.addEventListener('click', () => {
            window.location.href = element.html_url
        })

           
        projectRepo.append(repoButton, demoButton)
        projectCard.append(projectName, projectInfo, projectRepo)
    
        cardsContainer.appendChild(projectCard)
    });

}


function renderPage(){
    let username = localStorage.getItem("username")
    renderHeader(username)
    renderMain(username)
    
}
renderPage()