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
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista})
    
     
  }

  adicionarComentario = evento => {
    evento.preventDefault();
    console.log('Adicionando comentario...')

    const novoComentario = {...this.state.novoComentario, data: new Date()}

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome: '', email: '', mensagem: ''}
    })

  }

  digitacao = evento => {
    const {name, value} = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })
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
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentários</h2>
          <div>
            <input
              type="text"
              name="nome"
              onChange={this.digitacao}
              value={this.state.novoComentario.nome}
              placeholder='Digite o seu nome' />
          </div>
          <div>
            <input
              type="email"
              name="email"
              onChange={this.digitacao}
              value={this.state.novoComentario.email}
              placeholder='Digite o seu email' />
          </div>
          <div>
            <textarea
              name="mensagem"
              onChange={this.digitacao}
              value={this.state.novoComentario.mensagem}
              rows="4" />
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
