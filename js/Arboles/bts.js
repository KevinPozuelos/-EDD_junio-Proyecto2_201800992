class NodoA {
    constructor(dni, nombre_actor, correo, descripcion) {
        this.dni = dni;
        this.nombre_actor = nombre_actor
        this.correo = correo
        this.descripcion = descripcion

        this.izquierdo = null;
        this.derecho = null;
    }
}

class ABB {
    constructor() {
        this.raiz = null;
    }

    insertar(dni, nombre_actor, correo, descripcion,) {
        this.raiz = this.add(dni, nombre_actor, correo, descripcion, this.raiz);
    }

    add(dni, nombre_actor, correo, descripcion, nodo) {
        if (nodo == null) {
            return new NodoA(dni, nombre_actor, correo, descripcion);
        } else {
            if (dni > nodo.dni) {
                nodo.derecho = this.add(dni, nombre_actor, correo, descripcion, nodo.derecho);
            } else {
                nodo.izquierdo = this.add(dni, nombre_actor, correo, descripcion, nodo.izquierdo);
            }
        }
        return nodo;
    }

    preOrden() {
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo) {
        if (nodo != null) {
            console.log("dni:", nodo.dni);
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
            console.log("dni:", nodo.dni);
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
            console.log("dni:", nodo.dni);
        }
    }

    graphRaiz = (nodo) => {
        let graph = "";
        if (nodo.izquierdo == null && nodo.derecho == null) {
            graph +='\"' +  nodo.nombre_actor+ '\"';
        } else {

            if (nodo.izquierdo != null) {

                graph += '\"' + nodo.nombre_actor + '\"' + "->" + this.graphRaiz(nodo.izquierdo) + "\n";
            }
            if (nodo.derecho != null) {
                graph += '\"' + nodo.nombre_actor + '\"' + "->" + this.graphRaiz(nodo.derecho) + "\n";
            }
        }
        return graph

    }

    graph1 = () => {
        this.graphRaiz(this.raiz);
        return this.graphRaiz(this.raiz);
    }

    dotGraph = () => {
        var codigodot = "digraph G\n"
            + "{\n"
            + "node [shape=circle];\n"
            + "node [style = filled]\n";
        +"node [fillColor = \"#FF0000\"];\n"
            + "node [color = \"#FF0000\"];\n"
            + "edge [color = \"#FF0000\"];\n"

        if (this.raiz != null) {
            codigodot += this.graph1(this.raiz);;
        }
        codigodot += "\n}";
        d3.select('#lienzo').graphviz()
            .width(750)
            .height(750)
            .renderDot(codigodot)


        return console.log(codigodot);
    }
    buscar = (dni, aux = this.raiz) => {

        if (dni > aux.dni) {
            if (aux.derecho != null) {
                return this.buscar(dni, aux.derecho)
            } else {
                return false
            }
        } else if (dni < aux.dni) {
            if (aux.izquierdo != null) {
                return this.buscar(dni, aux.izquierdo)
            } else {
                return false
            }
        } else {
            return aux
        }
    }


}

let Actores = new ABB();