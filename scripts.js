let chave = "839a58620d9e567dff7da6af0557fef2"

function colocarNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML =  " Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + " °C"
    document.querySelector(".descri").innerHTML = dados.weather[0].description
    document.querySelector(".umid").innerHTML = " Umidade " + (dados.main.humidity) + " % "
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}


async function buscarCidade(cidade){

    let dados = await fetch(" https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
    "&appid=" +
    chave +
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)

    

}

function clicarbotao(){
    let cidade = document.querySelector(".input-cidade").value 
    buscarCidade(cidade)
}