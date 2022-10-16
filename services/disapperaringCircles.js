//CRIANDO AS IMAGENS 
let restartImg = document.createElement('img'); 
restartImg.src = 'img/restart.jpg';
restartImg.title = "Restart"; 
restartImg.style.width = '50px';
restartImg.style.height = '50px';

let addCircle = document.createElement('img'); 
addCircle.src = 'img/addCircle.png';
addCircle.title = "Adicionar círculo"; 
addCircle.style.width = '50px';
addCircle.style.height = '50px';

let removeCircle = document.createElement('img'); 
removeCircle.src = 'img/removeCircle.png';
removeCircle.title = "Remover círculo"; 
removeCircle.style.width = '50px';
removeCircle.style.height = '50px';


// Adicionando as imagens das cores; 
let dodgerBlue = document.createElement('img'); 
dodgerBlue.src = 'img/dodgerBlue.png';
dodgerBlue.title = "Cor dodgerBlue"; 
dodgerBlue.style.width = '80px';
dodgerBlue.style.height = '80px';
dodgerBlue.style.borderRadius = '10px';

let steelBlue = document.createElement('img'); 
steelBlue.src = 'img/steelBlue.png';
steelBlue.title = "Cor steelBlue"; 
steelBlue.className = "imgCores";
steelBlue.style.width = '80px';
steelBlue.style.height = '80px';
steelBlue.style.borderRadius = '10px';

let aquamarine = document.createElement('img'); 
aquamarine.src = 'img/aquamarine.png';
aquamarine.title = "Cor aquamarine"; 
aquamarine.className = "imgCores";
aquamarine.style.width = '80px';
aquamarine.style.height = '80px';
aquamarine.style.borderRadius = '10px';

let springgreen = document.createElement('img'); 
springgreen.src = 'img/springgreen.png';
springgreen.title = "Cor springgreen"; 
springgreen.className = "imgCores";
springgreen.style.width = '80px';
springgreen.style.height = '80px';
springgreen.style.borderRadius = '10px';

let sienna = document.createElement('img'); 
sienna.src = 'img/sienna.png';
sienna.title = "Cor sienna"; 
sienna.className = "imgCores";
sienna.style.width = '80px';
sienna.style.height = '80px';
sienna.style.borderRadius = '10px';

let lightCoral = document.createElement('img'); 
lightCoral.src = 'img/lightCoral.png';
lightCoral.title = "Cor lightCoral"; 
lightCoral.className = "imgCores";
lightCoral.style.width = '80px';
lightCoral.style.height = '80px';
lightCoral.style.borderRadius = '10px';

let darkRed = document.createElement('img'); 
darkRed.src = 'img/darkRed.png';
darkRed.title = "Cor darkRed"; 
darkRed.className = "imgCores";
darkRed.style.width = '80px';
darkRed.style.height = '80px';
darkRed.style.borderRadius = '10px';

let orange = document.createElement('img'); 
orange.src = 'img/orange.png';
orange.title = "Cor orange"; 
orange.className = "imgCores";
orange.style.width = '80px';
orange.style.height = '80px';
orange.style.borderRadius = '10px';

let yellow = document.createElement('img'); 
yellow.src = 'img/yellow.png';
yellow.title = "Cor yellow"; 
yellow.className = "imgCores";
yellow.style.width = '80px';
yellow.style.height = '80px';
yellow.style.borderRadius = '10px';



// Adicionando o título na nossa página 
let title = document.createElement('h1'); 
title.style.display = "grid";
title.style.justifyContent = "center";
title.id = "title"; 
title.innerHTML = "DISAPPERARING CIRCLES"; 
title.style.color = "black";
title.style.fontSize = '80px';

title.style.borderRadius = "10px";


//Div onde ficará os botoes e informações
let divBotoesEInfo = document.createElement('div');


//TEXTO DA INFORMAÇÃO
let textoInfo = document.createElement('h3'); 
textoInfo.style.display = "grid";
textoInfo.style.justifyContent = "center";
textoInfo.innerHTML = "Temos as seguintes cores:";
textoInfo.style.color = "white";
textoInfo.style.fontSize = '30px';
textoInfo.style.backgroundColor = "black";
textoInfo.style.borderRadius = "10px";
textoInfo.style.margin = "0";
textoInfo.style.border = '10px';



//CRIANDO UMA DIV PARA POR INFORMAÇÕES 
let informacoes = document.createElement('div');
informacoes.style.display = "inline-block";
informacoes.style.margin = "0";
informacoes.style.width = '720px';
informacoes.style.height = '300px';
informacoes.appendChild(textoInfo);
//adicionando cores
informacoes.appendChild(dodgerBlue);
informacoes.appendChild(steelBlue);
informacoes.appendChild(aquamarine);
informacoes.appendChild(springgreen);
informacoes.appendChild(sienna);
informacoes.appendChild(lightCoral);
informacoes.appendChild(darkRed);
informacoes.appendChild(orange);
informacoes.appendChild(yellow);


//texto para o contador de circulos
let textoContator = document.createElement('h3');
let quantidadeDeCirculosAdd = 0;
textoContator.innerHTML = "Temos um total de "+ quantidadeDeCirculosAdd + " <br>círculos adicionados!";
textoContator.style.color = "white";
textoContator.style.fontSize = '20px';
textoContator.style.backgroundColor = "black";
textoContator.style.width = '250px';
textoContator.style.borderRadius = "10px";
textoContator.style.display = "grid";
textoContator.style.justifyContent = "center";

//Informações com um contador de circulos
let contador = document.createElement('div');
contador.style.display = "inline-block";
contador.style.float = 'right';
contador.style.marginRight = "10%";
contador.style.width = 'auto';
contador.style.height = '200px';
contador.appendChild(textoContator)


//Criando botões 
let botoesDiv = document.createElement('div');
botoesDiv.style.display = "inline-block";
botoesDiv.style.float = 'right';
botoesDiv.style.marginRight = "20px";


//botão de adicionar 
let botaoAdicionar = document.createElement('button');
botaoAdicionar.type = 'button'; 
botaoAdicionar.appendChild(addCircle);
botaoAdicionar.style.display = 'block'; 
botaoAdicionar.style.backgroundColor = 'white';
botaoAdicionar.className = 'buttons';

//botão de remover 
let botaoRemover = document.createElement('button');
botaoRemover.type = 'button'; 
botaoRemover.appendChild(removeCircle);
botaoRemover.style.display = 'block'; 
botaoRemover.style.backgroundColor = 'white';
botaoRemover.className = 'buttons';

//botão de restart 
let botaoRestart = document.createElement('button');
botaoRestart.type = 'button'; 
botaoRestart.appendChild(restartImg);
botaoRestart.style.display = 'block';
botaoRestart.style.backgroundColor = 'white';
botaoRestart.className = 'buttons';

// ADICIONAR OS BOTÕES NA DIV CRIADA PARA OS BOTÕES 
botoesDiv.appendChild(botaoAdicionar);
botoesDiv.appendChild(botaoRemover);
botoesDiv.appendChild(botaoRestart);

//ADICIONANDO AS DIVS NA DIV DE BOTOES E INFORMAÇÕES
divBotoesEInfo.appendChild(botoesDiv);
divBotoesEInfo.appendChild(contador);
divBotoesEInfo.appendChild(informacoes);


// CRIAR DIV DO CÍRCULO 
let circulos = document.createElement('div');
circulos.style.float = "right"; 
circulos.style.padding = "0.2em"; 
circulos.style.margin = "0.5em auto";
circulos.id = "circulos";


// LISTAS 
let listaDeCores = [ '#1E90FF','#4682B4', '#7FFFD4', '#00FF7F', '#A0522D', '#F08080'
,'#8B0000', '#FFA500', '#FFFF00'];




//QUANDO O BOTÃO ADICIONAR FOR CLICADO TEREMOS
addCircle.onclick = function () {

    //PARA O CONTADOR
    quantidadeDeCirculosAdd++;
    textoContator.innerHTML = "Temos um total de "+ quantidadeDeCirculosAdd + " <br>círculos adicionados!";
    

    let circulo = document.createElement('div'); 

    //style circulo 
    circulo.style.width = '100px';
    circulo.style.height = '100px';
    circulo.style.float = 'left';
    circulo.style.margin = '10px';
    circulo.style.borderRadius  = "50%"
    circulo.style.display = "block";


    //Opção de quando clicar no botão ele sumir 
    circulo.id = "circulo";
    circulo.onclick = function () {
        circulos.removeChild(circulo);
        if(quantidadeDeCirculosAdd>0){
            quantidadeDeCirculosAdd--;  //REMOVENDO NO CONTADOR
            textoContator.innerHTML = "Temos um total de "+ quantidadeDeCirculosAdd + " <br>círculos adicionados!";
        };
        
    };


    // Colocando cores
    let cor = listaDeCores[Math.floor(Math.random() * listaDeCores.length)]
    circulo.style.background = cor; 

    //adicionando o circulo na div CIRCULOS
    circulos.appendChild(circulo); 
    

};

// QUANDO O BOTAO REMOVER FOR CLICADO 
removeCircle.onclick = function () {
    if(quantidadeDeCirculosAdd>0){
        circulos.removeChild(circulos.lastChild);
        quantidadeDeCirculosAdd--;
        textoContator.innerHTML = "Temos um total de "+ quantidadeDeCirculosAdd + " <br>círculos adicionados!";
    };
  
};

//QUANDO O BOTAO RESTART FOR CLICADO 
botaoRestart.onclick = function () {
    quantidadeDeCirculosAdd =0;
    textoContator.innerHTML = "Temos um total de "+ quantidadeDeCirculosAdd + " <br>círculos adicionados!";

    let circulos = document.getElementById('circulos'); 
    while(circulos.firstChild) {
        circulos.removeChild(circulos.lastChild);
    };
};



// Enviando 
document.addEventListener('DOMContentLoaded', function(event) {
    document.body.style.display = "grid";
    
    document.body.appendChild(title); 
    document.body.appendChild(divBotoesEInfo); 
    document.body.appendChild(circulos); 
});


