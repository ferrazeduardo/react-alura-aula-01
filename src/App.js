import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import './assets/App.css'
import Categorias from './MeusDados/Categorias';
import ArrayDeNotas from './MeusDados/Notas';


export default class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   notas: [],
    //  categorias: ["Trabalho", "Esportes"]
    // };
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }


  // criarNota(titulo, texto,categoria) {
  //   const novaNota = {
  //     titulo,
  //     texto,
  //     categoria
  //   }

  //   const novoArrayNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas: novoArrayNotas
  //   }
  //   this.setState(novoEstado)
  // }

  // deletarNota(index) {
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index, 1);
  //   this.setState({ notas: arrayNotas });
  // }

  // adicionarCategoria(novaCategoria) {
  //   let arrayCategorias = [...this.state.categorias, novaCategoria]

  //   this.setState({
  //     categorias: arrayCategorias
  //   })
  // }

  render() {
    return (
      <section>
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} />
          <ListaDeNotas
            apagarNota={this.notas.deletarNotas.bind(this.notas)}
            notas={this.notas} />
        </main>

      </section>
    );
  }

}

