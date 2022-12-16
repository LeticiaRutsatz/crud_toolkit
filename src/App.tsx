//1 obter as acoes dos dispatch
import { useDispatch, useSelector } from "react-redux";
import { State } from "./store/store";
import { atualizar, cadastrar, excluir } from "./store/banco";
import { Produtos } from "./store/bancodedados";
import { useState } from "react";

function App() {
  const [nome, setNomeProduto] = useState("");
  const [preco, setPreco] = useState(0);
  //vou usar as acoes
  const dispatch = useDispatch();

  //peguei o estado inicial do meu reducer
  const listProducts = useSelector((state: State) => state.banco.localstorage);
  //const resultado = useSelector((state: State) => state.banco.bd);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="nome do produto"
          onChange={(e) => setNomeProduto(e.target.value)}
        />
        <input
          type="text"
          placeholder="valor do produto"
          onChange={(e) => setPreco(Number(e.target.value))}
        />
        <button
          onClick={(e) =>
            dispatch(
              cadastrar({ id: listProducts.length + 1, nome, preco })
            )
          }
        >
          Cadastrar
        </button>
        {listProducts.map((elemento: Produtos, index) => {
          return (
            <div key={index} style={{ border: "solid", width: "300px" }}>
              <h1>{elemento.nome}</h1>
              <p>R$ {elemento.preco}</p>
              <button
              onClick={(e) =>
              dispatch(
              excluir({id: elemento.id})
              )
              }
            >
          Excluir
        </button>
          <input
          type="text"
          placeholder="nome do produto"
          onChange={(e) => setNomeProduto(e.target.value)}
        />
        <input
          type="text"
          placeholder="valor do produto"
          onChange={(e) => setPreco(Number(e.target.value))}
        />
        <button
              onClick={(e) =>
              dispatch(
              atualizar({ id: elemento.id, nome, preco })
              )
              }
            >
            Atualizar
        </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
