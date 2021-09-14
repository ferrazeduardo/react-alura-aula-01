import React, { Component } from 'react'
import "./estilo.css"

export default class CardNota extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
                </header>
                <p className="card-nota_text">{this.props.nota.texto}</p>
            </section>
        );
    }
}

