class nodoSimple {
    constructor(username, pAlquiler) {
        this.username = username;
        this.pAlquiler = pAlquiler;
        this.siguiente = null;

    }
}

class ListaSimple {
    constructor() {
        this.raiz = null;
        this.ultimo = null;
        this.size = 0
    }

    insertar = (username, pAlquiler) => {
        let nuevo = new nodoSimple(username, pAlquiler);
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
            console.log("Nombre de usuario:" + aux.username)
            aux = aux.siguiente
        }
    }

    buscar = (nombre_usuario, pw) => {
        let aux = this.raiz;
        while(aux != null){
            if(aux.nombre_usuario == nombre_usuario && aux.contrasenia == pw){
                console.log("Usuario existe");
                return true;
            }
            aux = aux.siguiente;
            if(aux == this.primero){
                break;
            }
        }
    }

    graph = () => {
        var codigodot = "digraph G{\nbgcolor=none\nrankdir=LR;\nlabel=\" Usuarios \";\nnode [shape=box];\n nodesep=1;\n" + "node [shape=record fontname=Arial]\n;";
        var temp = this.raiz
        var nodes = "";
        var conexiones = "";
        var Nnode = 0;

        while(temp != null){
            nodes += "N" + Nnode + " [label=\"" + "\\n" + temp.username + "\\n" + temp.pAlquiler +"\\n" +"\"];\n";
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
       
    }
}
let alquiler = new ListaSimple();

