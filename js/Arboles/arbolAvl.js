class NodoAvl {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
        this.altura = 0;
    }
}

class AVL {
    constructor() {
        this.raiz = null;
    }

    MAXIMO(valor1, valor2) {
        if (valor1 > valor2) return valor1;
        return valor2;
    }

    altura(nodo) {
        if (nodo == null) return -1;
        return nodo.altura;
    }

    insertar(valor) {
        this.raiz = this.add(valor, this.raiz);
    }

    add(valor, nodo) {
        if (nodo == null) return new NodoAvl(valor);
        else {
            if (valor < nodo.valor) {
                nodo.izquierdo = this.add(valor, nodo.izquierdo)
                if (this.altura(nodo.derecho) - this.altura(nodo.izquierdo) == -2) {
                    if (valor < nodo.izquierdo.valor) {
                        nodo = this.RotacionIzquierda(nodo);
                    } else {
                        nodo = this.RotacionDobleIzquierda(nodo);
                    }
                }
            } else if (valor > nodo.valor) {
                nodo.derecho = this.add(valor, nodo.derecho);
                if (this.altura(nodo.derecho) - this.altura(nodo.izquierdo) == 2) {
                    if (valor > nodo.derecho.valor) {
                        nodo = this.RotacionDerecha(nodo);
                    } else {
                        nodo = this.RotacionDobleDerecha(nodo);
                    }
                }
            } else {
                nodo.valor = valor;
            }
        }
        nodo.altura = this.MAXIMO(this.altura(nodo.izquierdo), this.altura(nodo.derecho)) + 1
        return nodo;
    }

    _

    RotacionIzquierda(nodo) {
        let aux = nodo.izquierdo;
        nodo.izquierdo = aux.derecho;
        aux.derecho = nodo;
        nodo.altura = this.MAXIMO(this.altura(nodo.derecho), this.altura(nodo.izquierdo)) + 1;
        aux.altura = this.MAXIMO(this.altura(nodo.izquierdo), nodo.altura) + 1;
        return aux;
    }

    RotacionDobleIzquierda(nodo) {
        nodo.izquierdo = this.RotacionDerecha(nodo.izquierdo);
        return this.RotacionIzquierda(nodo);
    }

    RotacionDerecha(nodo) {
        var aux = nodo.derecho;
        nodo.derecho = aux.izquierdo;
        aux.izquierdo = nodo;
        nodo.altura = this.MAXIMO(this.altura(nodo.derecho), this.altura(nodo.izquierdo)) + 1;
        aux.altura = this.MAXIMO(this.altura(nodo.derecho), nodo.altura) + 1;
        return aux;
    }

    RotacionDobleDerecha(nodo) {
        nodo.derecho = this.RotacionIzquierda(nodo.derecho);
        return this.RotacionDerecha(nodo);
    }


    preOrden() {
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo) {
        if (nodo != null) {
            console.log("Valor:", nodo.valor);
            this.pre_orden(nodo.izquierdo);
            this.pre_orden(nodo.derecho);
        }
    }

    inOrden() {
        this.in_orden(this.raiz);
    }

    in_orden(nodo) {
        if (nodo != null) {
            this.in_orden(nodo.izquierdo);
            console.log("Valor:", nodo.valor);
            this.in_orden(nodo.derecho);
        }
    }

    postOrden() {
        this.post_orden(this.raiz);
    }

    post_orden(nodo) {
        if (nodo != null) {
            this.post_orden(nodo.izquierdo);
            this.post_orden(nodo.derecho);
            console.log("Valor:", nodo.valor);
        }
    }

    graphRaiz=(nodo)=>{
        let graph = "";
        if(nodo.izquierdo == null && nodo.derecho == null){
        graph += nodo.valor;
        } else {
            
            if(nodo.izquierdo != null){
            
                graph += nodo.valor + "->"+ this.graphRaiz(nodo.izquierdo)+"\n";
            }
            if(nodo.derecho!= null){
                graph+= nodo.valor + "->" + this.graphRaiz(nodo.derecho)+"\n";
            }
        }
        return graph

    }

    dotGraph =() => {
        var codigodot = "digraph G\n"
        +"{\n"
        +"node [shape=circle];\n"
        +"node [style = filled]\n";
        +"node [fillColor = \"#FF0000\"];\n"
        +"node [color = \"#FF0000\"];\n"
        +"edge [color = \"#FF0000\"];\n"

        if(this.raiz != null){
            codigodot += this.graphRaiz(this.raiz); ;
        }
        codigodot += "\n}";
        d3.select('#lienzo').graphviz()
        .width(300)
        .height(750)
        .renderDot(codigodot)
        
        
        return console.log(codigodot);
    }
}

var arbol = new AVL();
    
