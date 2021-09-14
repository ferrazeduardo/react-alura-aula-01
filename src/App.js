import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import './assets/App.css'


export default class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {};
  }


  criarNota(titulo, texto) {
    const nota = {
      titulo,
      texto
    }

    this.notas.push(nota);
    
    this.setState({
        notas: this.notas
    })
  }

  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.notas} />
      </section>
    );
  }

}

