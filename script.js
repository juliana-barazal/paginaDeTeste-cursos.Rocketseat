const perguntas = [
  {
    pergunta: "O que significa 'DOM' em JavaScript?",
    respostas: [
      "Document Object Model",
      "Data Object Model",
      "Design Object Model"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função principal do operador '===' em JavaScript?",
    respostas: [
      "Comparação de valores sem levar em conta o tipo de dados",
      "Comparação de valores levando em conta o tipo de dados",
      "Atribuição de valores"
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma variável em JavaScript?",
    respostas: [
      "Um tipo de dado primitivo",
      "Um objeto que armazena valores",
      "Uma função incorporada"
    ],
    correta: 1
  },
  {
    pergunta: "Como declarar uma função em JavaScript?",
    respostas: [
      "function myFunction()",
      "var myFunction = function()",
      "both A and B"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' para declarar variáveis?",
    respostas: [
      "'let' é usado para variáveis que não podem ser alteradas, 'const' para variáveis que podem",
      "'let' é usado para variáveis de escopo global, 'const' para variáveis de escopo local",
      "'let' permite reatribuição, 'const' não permite"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
    respostas: [
      "Levantar objetos no DOM",
      "Elevação de declarações para o topo do escopo",
      "Animações suaves em páginas da web"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
    respostas: [
      "Converter uma string em um número inteiro",
      "Arredondar um número decimal para o inteiro mais próximo",
      "Calcular a parte fracionária de um número"
    ],
    correta: 0
  },
  {
    pergunta: "O que é um closure em JavaScript?",
    respostas: [
      "Um bloco de código que é sempre executado",
      "Um objeto que armazena referências a variáveis fora de seu escopo",
      "Uma função que pode acessar variáveis em seu escopo lexical"
    ],
    correta: 2
  },
  {
    pergunta: "Como se verifica se uma variável é do tipo array em JavaScript?",
    respostas: [
      "Utilizando o operador 'typeof'",
      "Usando o método 'isArray()'",
      "Ambos A e B estão corretos"
    ],
    correta: 1
  },
  {
    pergunta: "O que é o conceito de 'event bubbling' em JavaScript?",
    respostas: [
      "Propagação de eventos do elemento pai para o elemento filho",
      "Propagação de eventos do elemento filho para o elemento pai",
      "Cancelamento de eventos durante a fase de borbulhamento"
    ],
    correta: 0
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
