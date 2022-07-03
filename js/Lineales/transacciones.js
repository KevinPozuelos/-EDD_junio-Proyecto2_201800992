class nodoSimpleT {
    constructor(username, pAlquiler) {
        this.username = username;
        this.pAlquiler = pAlquiler;
        this.siguiente = null;

    }
}

class ListaSimpleT {
    constructor() {
        this.raiz = null;
        this.ultimo = null;
        this.size = 0
    }

    insertar = (username, pAlquiler) => {
        let nuevo = new nodoSimpleT(username, pAlquiler);
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
        let transaccion ="{"
        while (aux != null) {
            console.log("Nombre de usuario:" + aux.username)
            transaccion +=   aux.username + "-" + aux.pAlquiler + "\n"
            aux = aux.siguiente
            
        }
        transaccion += "}"
        return transaccion+""
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

    
}

