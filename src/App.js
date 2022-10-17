import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@mail.com',
        data: new Date(2022, 10, 16),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Maria',
        email: 'maria@mail.com',
        data: new Date(2022, 10, 16),
        mensagem: 'Olá, tudo sim'
      }
    ]
  }

  adicionarComentario = () => {
    console.log('Adicionando comentario...')

    const novoComentario = {
      nome: 'Maria',
      email: 'maria@mail.com',
      data: new Date(),
      mensagem: 'Olá pessoal!!!!'
    }

    //uma forma de atualizar o estado
    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({comentarios: lista});

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario]
    })

  }

  render() {
    return (
      <div className="App">
        <h1> Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <button onClick={this.adicionarComentario}>Adicionar um comentario</button>
      </div>
    );
  }
}

export default App;
