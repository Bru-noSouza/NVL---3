import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: 1,
    nome: "Alt Art",
  },
  {
    codEditora: 2,
    nome: "Aurelis",
  },
  {
    codEditora: 3,
    nome: "spacdex",
  },
];

export default class ControleEditora {
  public getNomeEditora(codEditora: number) {
    const resultados = editoras.filter(
      (editora) => editora.codEditora === codEditora
    );
    if (resultados.length === 0) return "Editora não encontrada";
    return resultados[0].nome;
  }

  public getEditoras() {
    return editoras;
  }
}
