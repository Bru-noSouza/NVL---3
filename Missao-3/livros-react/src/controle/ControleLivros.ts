import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Python, que tal começar?",
    resumo:
    "Um livro abrangente sobre Python, fornecendo uma introdução completa à linguagem e cobrindo uma variedade de tópicos essenciais para programação e desenvolvimento.",
    autores: ["Robert Dex"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Guia Javascript",
    resumo:
    "Um guia prático para JavaScript, abrangendo desde conceitos básicos até tópicos avançados de programação e desenvolvimento web.",
    autores: ["Allan Henricz"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "PHP",
    resumo:
      "PHP é uma linguagem de programação de código aberto amplamente utilizada para o desenvolvimento de aplicativos web dinâmicos",
    autores: ["Rasmus Lerdorf"],
  },
];

export default class ControleLivro {
  incluir(livro: Livro) {
    livro.codigo = livros.length > 0 ? livros.at(-1)!.codigo + 1 : 1;
    livros.push(livro);
  }

  excluir(codigo: number) {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    livros.splice(index, 1);
  }

  obterLivros() {
    return livros;
  }
}
