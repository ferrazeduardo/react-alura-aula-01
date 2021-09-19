import React, { Component } from 'react'

export default class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias: []};
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }


    _novasCategorias(categorias){
        this.setState({...this.state,categorias})
    }

    _handleEventoInput(e) {
        if (e.key === "Enter") {
            this.props.adicionarCategoria(e.target.value)
        }
    }

    render() {
        return (
            <section>
                <ul>
                    {
                        this.state.categorias.map((categoria, index) => {
                          return  <li key={index} className="lista-categoria-item">{categoria}</li>
                        })
                    }
                </ul>
                <input onKeyUp={this._handleEventoInput.bind(this)} />
            </section>
        );
    }
}
