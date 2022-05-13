import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <ol className="list">
        {conteudos.map((obj, i) =>
          <li key={i} className="itens">
            <p>O conteúdo é: {obj.conteudo}</p>
            <p>Status: {obj.status}</p>
            <p>Bloco: {obj.bloco}</p>
          </li>
        )}
      </ol>
    )
  }
}

export default Content