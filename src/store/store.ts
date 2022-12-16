import {configureStore} from '@reduxjs/toolkit';
import minhaReducer from './banco';

const store = configureStore({
  reducer: {
    banco: minhaReducer
  }
});

//ele exporta o estado inicial
export type State = ReturnType<typeof store.getState>;
//você esta exportando a sua reduce pelo store
export default store;
