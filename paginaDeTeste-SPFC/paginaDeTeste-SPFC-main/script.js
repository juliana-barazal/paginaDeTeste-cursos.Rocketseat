const perguntas = [
    {
        pergunta: "Quantos jogadores da seleção brasileira de futebol que conquistaram a Copa do Mundo em 1970 jogavam pelo São Paulo Futebol Clube na época?",
        respostas: [
            "2",
            "3",
            "4"
        ],
        correta: 1
    },
    {
        pergunta: "Qual foi o jogador do São Paulo Futebol Clube que marcou o gol na final da Copa Libertadores de 1992 contra o Newell's Old Boys?",
        respostas: [
            "Raí",
            "Müller",
            "Palhinha"
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o treinador do São Paulo Futebol Clube no tricampeonato brasileiro consecutivo (2006, 2007 e 2008)?",
        respostas: [
            "Muricy Ramalho",
            "Emerson Leão",
            "Paulo Autuori"
        ],
        correta: 0
    },
    {
        pergunta: "Quantas vezes o São Paulo Futebol Clube conquistou o Campeonato Paulista em sua história?",
        respostas: [
            "21 vezes",
            "22 vezes",
            "23 vezes"
        ],
        correta: 1
    },
    {
        pergunta: "Qual jogador do São Paulo Futebol Clube é conhecido como 'Pintado'?",
        respostas: [
            "Hernanes",
            "Luís Carlos",
            "Válber"
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o primeiro jogador a marcar um gol no estádio do Morumbi?",
        respostas: [
            "Gino Orlando",
            "Peixinho",
            "Dino Sani"
        ],
        correta: 1
    },
    {
        pergunta: "Em que ano o São Paulo Futebol Clube conquistou o seu primeiro título do Campeonato Brasileiro?",
        respostas: [
            "1971",
            "1975",
            "1977"
        ],
        correta: 2
    },
    {
        pergunta: "Qual foi o placar da final do Mundial de Clubes da FIFA em 2005, em que o São Paulo Futebol Clube venceu o Liverpool?",
        respostas: [
            "1-0",
            "2-1",
            "3-2"
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o capitão do São Paulo Futebol Clube na conquista da Copa Libertadores da América em 2005?",
        respostas: [
            "Rogério Ceni",
            "Rogério Pinheiro",
            "Rogério Micale"
        ],
        correta: 0
    },
    {
        pergunta: "Qual jogador do São Paulo Futebol Clube recebeu o apelido de 'Milagreiro'?",
        respostas: [
            "Falcão",
            "Cafu",
            "Zetti"
        ],
        correta: 2
    }
];



const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
//new->coisas novas; set->conjunto que não pode ser repetido
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)//clonando o template
    quizItem.querySelector('h3').textContent = item.pergunta //muda o conteúdo do texto do template para a pergunta


    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true) //clona o 'modelo' dt
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'Pergunta-' + perguntas.indexOf(item)) //emite pergunta 1,2,3 - muda o name de acordo com o item
        dt.querySelector('input').value = item.respostas.indexOf(resposta) //muda o value das respostas para 0,1 ou 2
        dt.querySelector('input').onchange = (event) => { //quando se clica no input
            const estaCorreta = event.target.value == item.correta//verifica se ta certo

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
                alert('Você acertou! Seu número de acertos agora é ' + corretas.size)
            }

            else {
                corretas.item
                alert('Você errou! Seu número de acertos é ' + corretas.size)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()//para remover o "resposta A"

    quiz.appendChild(quizItem) //appendChild->colocar um filho, colocar a pergunta na tela
}
