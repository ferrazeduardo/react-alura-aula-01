import React, { Component } from 'react'
import "./estilo.css"
import {ReactComponent  as DeleteSVG}    from '../../assets/img/delete.svg'


export default class CardNota extends Component {
    // constructor(props){
    //     super(props)
    // }

    apagar(){
        const indece = this.props.index;
        this.props.apagarNota(indece);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
                    {/* <img src={deleteSVG} /> */}
                    <DeleteSVG onClick={this.apagar.bind(this)} />
                </header>
                <p className="card-nota_text">{this.props.nota.texto}</p>
            </section>
        );
    }
}

