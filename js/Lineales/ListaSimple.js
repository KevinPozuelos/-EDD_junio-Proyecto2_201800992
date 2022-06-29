class nodoSimple {
    constructor(dpi, nombre_completo, nombre_usuario, correo, contrasenia, telefono) {
        this.dpi = dpi;
        this.nombre_completo = nombre_completo;
        this.nombre_usuario = nombre_usuario;
        this.correo = correo;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
        this.siguiente = null;

    }
}

class ListaSimple {
    constructor() {
        this.raiz = null;
        this.ultimo = null;
        this.size = 0
    }

    insertar = (dpi, nombre_completo, nombre_usuario, correo, contrasenia, telefono) => {
        let nuevo = new nodoSimple(dpi, nombre_completo, nombre_usuario, correo, contrasenia, telefono);
        if (this.raiz == null) {
            this.raiz = this.ultimo = nuevo
        } else {
            this.ultimo.siguiente = nuevo;
            this.ultimo = nuevo

        }
        this.size++
        return
    }

    print = () => {
        let aux = this.raiz;
        while (aux != null) {
            console.log("Nombre de usuario:" + aux.nombre_usuario)
            aux = aux.siguiente
        }
    }

    graph = () => {
        var codigodot = "digraph G{\nbgcolor=none\nrankdir=LR;\nlabel=\" Usuarios \";\nnode [shape=box];\n nodesep=1;\n" + "node [shape=record fontname=Arial]\n;";
        var temp = this.raiz
        var nodes = "";
        var conexiones = "";
        var Nnode = 0;

        while(temp != null){
            nodes += "N" + Nnode + " [label=\"" + "\\n" + temp.dpi + "\\n" + temp.nombre_completo + "\\n" +temp.nombre_usuario+ "\\n" + temp.correo + "\\n" + temp.telefono + "\\n" +"\"];\n";
            if(temp.siguiente != null){
                var auxnum = Nnode + 1;
                conexiones += "N" + Nnode + " -> N" + auxnum + ";\n";
            }
            temp = temp.siguiente
            Nnode++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodes + "\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "\n" + conexiones + "\n}\n}"
        d3.select('#lienzo').graphviz()
        .width(500)
        .height(200)
        .renderDot(codigodot)
        
        return console.log(codigodot);
    }

}
let Clientes = new ListaSimple();
