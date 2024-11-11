const chaveDeApi = "a27db8b64ff94b6cbd8230239241111";
const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if(!cidade) return;

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDeApi}&q=${cidade}&aqi=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if(resposta.status !== 200) return;

    const dados = await resposta.json();
    
    const temperatura = Math.round(dados.current.temp_c);
    const umidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;

    document.getElementById("cidade").textContent = cidade;
    document.getElementById("temperatura").textContent = `${temperatura} °C`;
    document.getElementById("umidade").textContent = `${umidade} %`;
    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`;
    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao)



    







})