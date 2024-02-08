const perguntas = [
    {
        pergunta: "Qual jogador do São Paulo Futebol Clube recebeu o apelido de 'Deus'?",
        respostas: [
            "Kaká",
            "Lugano",
            "Rogério Ceni"
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o primeiro técnico do São Paulo Futebol Clube?",
        respostas: [
            "Antônio Franco de Siqueira",
            "Rubens Salles",
            "Antônio Ferreira"
        ],
        correta: 0
    },
    {
        pergunta: "Em que ano o São Paulo Futebol Clube conquistou seu primeiro Campeonato Brasileiro?",
        respostas: [
            "1971",
            "1975",
            "1977"
        ],
        correta: 2
    },
    {
        pergunta: "Quantos títulos da Copa Libertadores da América o São Paulo Futebol Clube conquistou consecutivamente?",
        respostas: [
            "2",
            "3",
            "4"
        ],
        correta: 1
    },
    {
        pergunta: "Qual foi o placar da partida que deu ao São Paulo Futebol Clube o título da Copa Intercontinental em 1992?",
        respostas: [
            "1-0 contra o Barcelona",
            "2-1 contra o Milan",
            "3-2 contra o Liverpool"
        ],
        correta: 0
    },
    {
        pergunta: "Quem foi o técnico do São Paulo Futebol Clube na conquista do Mundial de Clubes da FIFA em 2005?",
        respostas: [
            "Oswaldo de Oliveira",
            "Emerson Leão",
            "Paulo Autuori"
        ],
        correta: 2
    },
    {
        pergunta: "Qual jogador do São Paulo Futebol Clube recebeu o prêmio de melhor jogador da Copa Libertadores da América em 2005?",
        respostas: [
            "Mineiro",
            "Amoroso",
            "Cicinho"
        ],
        correta: 0
    },
    {
        pergunta: "Qual foi o primeiro jogador estrangeiro a atuar pelo São Paulo Futebol Clube?",
        respostas: [
            "Pedro Rocha",
            "Paraguay",
            "Gino Orlando"
        ],
        correta: 2
    },
    {
        pergunta: "Quantas vezes o São Paulo Futebol Clube venceu a Copa Sul-Americana?",
        respostas: [
            "1 vez",
            "2 vezes",
            "3 vezes"
        ],
        correta: 0
    },
    {
        pergunta: "Qual jogador do São Paulo Futebol Clube foi o artilheiro da Copa Libertadores da América em 1993?",
        respostas: [
            "Raí",
            "Müller",
            "Palhinha"
        ],
        correta: 1
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
