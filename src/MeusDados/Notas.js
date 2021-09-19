export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }


    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => func(this.nostas));
    }


    adicionarNota(titulo,text,categoria){
        const novaNota  = new Nota(titulo,text,categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNotas(indice){
        this.notas.splice(indice,1);
        this.notificar();
    }
}

class Nota{
    constructor(titulo,text,categoria){
        this.titulo = titulo;
        this.text = text;
        this.categoria = categoria
    }
}