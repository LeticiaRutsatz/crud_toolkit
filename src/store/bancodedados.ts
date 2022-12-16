export type Produtos = {
  id: number;
  nome: string;
  preco: number;
}

export const ProdutosBanco: Produtos[] = [
  {id: 1, nome: "Notebook", preco: 7000},
  {id: 2, nome: "Cadeira Gamer", preco: 1500},
  {id: 3, nome: "Mesa", preco: 350}
];

/*export const bd = ((produtos : Produtos[]) => {
  localStorage.setItem('produtos', JSON.stringify(produtos));
;})*/

//bd(ProdutosBanco);

/*export function resultado() : Produtos[] | [] {
  const get = localStorage.getItem('produtos');
  return get !== null ? JSON.parse(get) : [];
};*/