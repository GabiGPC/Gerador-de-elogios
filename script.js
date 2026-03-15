const elogios={

personalidade:[

"Você tem uma forma de ser que deixa tudo mais leve ao redor.",
"Estar perto de você sempre melhora o meu dia.",
"Você tem uma energia boa que contagia as pessoas.",
"Você é uma daquelas pessoas que fazem o mundo parecer um lugar melhor.",
"Eu admiro muito a forma como você trata os outros.",
"Você tem uma sensibilidade rara.",
"Você faz as pessoas se sentirem importantes.",
"Você tem uma presença que transmite paz.",
"Você consegue ser forte e gentil ao mesmo tempo.",
"Você é alguém que faz diferença na vida dos outros."

],

aparencia:[

"Seu sorriso muda completamente o clima de qualquer lugar.",
"Você tem um olhar que prende a atenção.",
"Você é naturalmente elegante.",
"Você tem uma beleza que não passa despercebida.",
"Existe algo no seu jeito que é simplesmente encantador.",
"Você tem um brilho próprio.",
"Seu estilo é muito marcante.",
"Você é uma pessoa muito bonita, de verdade.",
"Seu olhar transmite muita coisa boa.",
"Você chama atenção sem nem tentar."

],

intelecto:[

"Eu gosto muito de ouvir você falando sobre as coisas.",
"Você tem uma forma muito inteligente de enxergar o mundo.",
"Suas ideias sempre me fazem pensar.",
"Você explica as coisas de um jeito muito claro.",
"Você tem uma mente muito interessante.",
"Você faz perguntas que poucas pessoas fazem.",
"Eu admiro muito a sua forma de raciocinar.",
"Você aprende as coisas muito rápido.",
"Conversar com você é sempre enriquecedor.",
"Você tem uma curiosidade que inspira."

],

carater:[

"Você é uma pessoa extremamente confiável.",
"Seu caráter é admirável.",
"Você faz o certo mesmo quando ninguém está olhando.",
"Você tem valores muito sólidos.",
"Eu respeito muito quem você é.",
"Você é uma pessoa de verdade.",
"Você demonstra integridade nas pequenas coisas.",
"Você tem um senso de justiça muito bonito.",
"Você inspira confiança.",
"Você é alguém em quem se pode confiar de olhos fechados."

]

};

const apaixonado=[

"Eu sinceramente acho incrível como você existe exatamente do jeito que é.",
"Às vezes eu fico olhando para você e pensando como tive tanta sorte.",
"Você tem um jeito que me desmonta completamente.",
"Eu poderia passar horas ouvindo você falar.",
"Quando você sorri parece que o mundo inteiro melhora.",
"Eu admiro você de um jeito que é difícil explicar.",
"Você tem um espaço muito especial dentro de mim.",
"Seu jeito ficou gravado em mim.",
"Eu gosto de quem eu sou quando estou perto de você.",
"Você é uma das pessoas mais especiais que já conheci."

];

function gerarElogio(){

const categoria=document.getElementById("categoria").value;

const modoApaixonado=document.getElementById("modoApaixonado").checked;

let lista=[];

if(modoApaixonado){

lista=apaixonado;

}else{

if(categoria==="todas"){

lista=[
...elogios.personalidade,
...elogios.aparencia,
...elogios.intelecto,
...elogios.carater
];

}else{

lista=elogios[categoria];

}

}

const frase=lista[Math.floor(Math.random()*lista.length)];

document.getElementById("elogio").innerText=frase;

}

function copiar(){

const texto=document.getElementById("elogio").innerText;

navigator.clipboard.writeText(texto);

alert("Elogio copiado!");

}

document.getElementById("gerar").addEventListener("click", gerarElogio);

document.getElementById("copiar").addEventListener("click", copiar);
