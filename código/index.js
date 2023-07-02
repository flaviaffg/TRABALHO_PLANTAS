// Recupera os dados salvos no Local Storage
var dadosArquivos = localStorage.getItem("plantas");

/*

// Verifica se existem dados salvos
if (dadosArquivos) {
  // Converte os dados salvos em um array de objetos
  var cards = JSON.parse(dadosArquivos);
} else {
  // Exemplo de array de cards
  var cards = [
    { titulo: "Card 1", descricao: "Descrição do Card 1" },
    { titulo: "Card 2", descricao: "Descrição do Card 2" },
    { titulo: "Card 3", descricao: "Descrição do Card 3" }
  ];
}

// Obtém a referência da div de exibição
var divExibicao = document.querySelector('.linha2');

// Verifica se existem cards para exibir
if (cards.length > 0) {
  // Percorre o array de cards e cria elementos HTML para cada um deles
  cards.forEach(function(card) {
    var cardElement = document.createElement('div');
    cardElement.classList.add('card', 'col-3', 'col-sm-5', 'col-md-3');
    cardElement.innerHTML = `
    <h1 class="title">${card.titulo}</h1>
    <p class="category">${card.descricao}</p>
  `;
    divExibicao.appendChild(cardElement);
  });

} else {
  console.log("Nenhum card para exibir.");
}

// Obtém o botão pelo seu ID
var botao = document.getElementById('meuBotao');

// Manipulador de evento para o clique no botão
botao.addEventListener('click', function() {
  // Array de objetos
  var cards = [
    { titulo: "Card 1", descricao: "Descrição do Card 1" },
    { titulo: "Card 2", descricao: "Descrição do Card 2" },
    { titulo: "Card 3", descricao: "Descrição do Card 3" },
    { titulo: "Card 4", descricao: "Descrição do Card 4" },
    { titulo: "Card 5", descricao: "Descrição do Card 5" },
    { titulo: "Card 6", descricao: "Descrição do Card 6" }
  ];

  // Converte o array de objetos em uma string JSON
  var dadosArquivos = JSON.stringify(cards);

  // Armazena os dados no Local Storage
  localStorage.setItem("arquivos", dadosArquivos);

  console.log("Dados salvos no Local Storage com sucesso!");

  // Limpa a div de exibição antes de exibir os novos dados
  divExibicao.innerHTML = '';

  // Verifica se existem dados salvos no Local Storage
  if (dadosArquivos) {
    // Converte os dados salvos em um array de objetos
    var cards = JSON.parse(dadosArquivos);

    // Verifica se existem cards para exibir
    if (cards.length > 0) {
      // Percorre o array de cards e cria elementos HTML para cada um deles
      cards.forEach(function(card) {
        var cardElement = document.createElement('div');
        cardElement.classList.add('card', 'col-3', 'col-sm-5', 'col-md-3');
        cardElement.innerHTML = `
    <h1 class="title">${card.titulo}</h1>
    <p class="category">${card.descricao}</p>
  `;
        divExibicao.appendChild(cardElement);
      });
    } else {
      console.log("Nenhum card para exibir.");
    }
  } else {
    console.log("Nenhum dado encontrado no Local Storage.");
  }
});

*/