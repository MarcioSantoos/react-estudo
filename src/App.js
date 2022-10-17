import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1> Meu projeto</h1>
      <Comentario nome="João" email="joao@mail.com" data={new Date(2022, 10, 16)}>
        Olá, tudo bem?
      </Comentario>
      <Comentario nome="Maria" email="maria@mail.com" data={new Date(2022, 10, 16)}>
        Olá, tudo sim.
      </Comentario>

    </div>
  );
}

export default App;
