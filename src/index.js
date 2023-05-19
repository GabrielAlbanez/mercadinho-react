import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BuscaContextProvider } from './components/contexts/buscaContext';
import { ProdutoContextProvider } from './components/contexts/produtosContext';
import { CarrinhoContextProvier } from './components/contexts/carrinho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarrinhoContextProvier>
  <React.StrictMode>
    <BuscaContextProvider>
      <ProdutoContextProvider>
    <App />
    </ProdutoContextProvider>
    </BuscaContextProvider>
  </React.StrictMode>
  </CarrinhoContextProvier>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
