import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota';
import './estilo.css'

export default class ListaDeNotas extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota 
                            index={index}
                            apagarNota={this.props.apagarNota}
                            nota={nota} />
                        </li>
                    )
                })
                }
            </ul>
        )
    }

}