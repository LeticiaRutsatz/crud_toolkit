import { createSlice } from "@reduxjs/toolkit";
import {ProdutosBanco} from './bancodedados';
//receita de bolo - name, initialState, reducers
const banco = createSlice({
  name: "banco",//nome da reduce
  initialState: {//estado inicial
    localstorage: ProdutosBanco, //bd : resultado(),
  },
  reducers:{//actions - todas funcao aqui dentro ela é uma parte do teu reducer
    cadastrar(state, action){
      state.localstorage.push(action.payload);//payoad é o valor que muda estado
      //bd(state);
    },
    excluir(state, action){
      //state.localstorage.slice(action.payload.id, 1);
      state.localstorage = state.localstorage.filter((e)=> e.id !== action.payload.id);
    },
    atualizar(state, action) {
      state.localstorage.map((e)=> {
        if(e.id === action.payload.id){
          e.nome = action.payload.nome;
          e.preco = action.payload.preco;
        }
      })
    }
}});
//exportar as minhas acoes
export const {cadastrar, excluir, atualizar} = banco.actions;
export default banco.reducer;
