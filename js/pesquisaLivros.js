function pesquisaLivros(tituloLivro) {
  searchBooks(tituloLivro).then(function(data) {
    erroPesquisa.hide();
    const books = data.books;
    if(books.error) {
      let erroPesquisa = $(".pesquisa-erro");
      erroPesquisa.text("Desculpe. Não conseguimos encontrar nenhum livro pela palavra pesquisada.");
      erroPesquisa.show();
      gifCarregando.hide();
    }
    else {
      montaLivrosPesquisa(tituloLivro, books);
    }
    $("body").on("change", ".opcao-livro", function(event){
      event.preventDefault();
      id = this.id;
      let valueSelected = this.value;
      titulo = this.parentNode.children[0].innerHTML;
      trocaEstante(books, id, valueSelected);
    })
  })
}