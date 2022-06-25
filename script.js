const elementoPergunta = document.querySelector("#elementoPergunta")
const elementoResposta = document.querySelector("#elementoResposta")
const elementoBotao = document.querySelector("#elementoBotao")
const respostas = [
    'Certeza!',
    'Não tenho tanta certeza.',
    'É decididamente assim.',
    'Não conte com isso.',
    'Sem dúvidas!',
    'Pergunte novamente mais tarde.',
    'Sim, definitivamente!',
    'Minha resposta é não.',
    'Você pode contar com isso.',
    'Melhor não te dizer agora.',
    'A meu ver, sim.',
    'Minhas fontes dizem que não.',
    'Provavelmente.',
    'Não é possível prever agora.',
    'Perspectiva boa.',
    'As perspectivas não são tão boas.',
    'Sim.',
    'Concentre-se e pergunte novamente.',
    'Sinais apontam que sim.'
]
function fazerPergunta() {   
    //Verificação se há uma pergunta vazia, se sim, mostrará um 'alert' e o fluxo da função será interrompido.
    if(elementoPergunta.value == ""){
        window.alert("Nenhuma pergunta foi inserida no campo, tente novamente.")
        return
    }   
    elementoBotao.setAttribute("disabled", true)
    const pergunta = "<div/>" + elementoPergunta.value + "</div>"
    //Gerador de número aleatório baseado no 'respostas.length', ou seja, no número total de respostas que se encontram na respectiva array.
    const numeroAleatorio = Math.floor(Math.random() * (respostas.length + 0.1))
    elementoResposta.style.opacity = 1;
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]    
    setTimeout(function(){
        elementoResposta.style.opacity = 0;
        elementoBotao.removeAttribute("disabled")
    }, 3000)
}
