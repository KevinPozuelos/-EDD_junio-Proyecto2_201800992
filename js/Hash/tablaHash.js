class NodoHash { // Lista
    constructor(clave, valor) {
        this.clave = null;
        this.valor = valor;
        this.llave = clave % 20;
        this.next = null;
        this.list = null;
    }
}

class Tabla_Hash {
    constructor(size = 20, count = 0) {
        this.size = size;
        this.count = count;
        this.head = null;
        this.create_List();
    }

    getHash(clave) {
        let llave = clave % 20;
        return llave;
    }

    create_List() {
        for (let i = 0; i < 20; i++) {
            this.insert(i, null);
        }
    }

    insert(clave, valor) {
        let hash = new NodoHash(clave, valor);

        if (this.head === null) {
            this.head = hash;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = hash;
        }
    }

    InsertarNodoHash(clave, valor) {
        let hash = new NodoHash(clave, valor);
        let llave = this.getHash(clave, valor);
        let temp = this.head;
        hash.clave = clave;

        while (temp.llave != llave) {
            temp = temp.next;
        }
        if (temp.valor === null) {
            temp.clave = clave;
            temp.valor = valor;
        } else {
            if (temp.list === null) {
                //if (temp.clave == clave) {
                    //return;
                //}
                temp.list = hash;
            } else {

                let temp_ = temp.list;
                //if (temp_.clave == clave) {
                    //return;
               //}
                while (temp_.list != null) {
                    //if (temp_.clave == clave) {
                        //return;
                    //}
                    temp_ = temp_.list;
                }
                temp_.list = hash;
            }
        }
    }

    buscar(clave) {
        let llave = this.getHash(clave % 30);
        let temp = this.head;

        while (temp.llave != llave) {
            temp = temp.next;
        }

        if (temp.clave == clave) {
            return temp;
        } else {
            let temp_ = temp.list;
            while (temp_.clave != clave) {
                temp_ = temp_.list;
            }
            if (temp_.clave == clave) {
                return temp_;
            }
        }
    }

    display() {
        let temp = this.head;
        while (temp) {
            console.log("Head: " + temp.clave);
            let temp_ = temp.list;
            while (temp_) {
                console.log("List: " + temp_.clave);
                temp_ = temp_.list;
            }
            temp = temp.next;
        }
    }

    graficadora() {
        let str = "";
        let temp = this.head;
        let count = 0;
        let rand = 0;
        let rowInfo = "{rank=same;";
        while (temp) {
            str += "Nodo" + count + " [label=\"Nodo: " + temp.llave + " -> Valor: " + temp.valor + "\"];\n";
            rowInfo += "Nodo" + count + ";";
            temp = temp.next;
            count++;
        }
        temp = this.head;
        str += "Nodo" + 0;
        count = 1;
        temp = temp.next;
        while (temp) {
            str += "  Nodo" + count;
            temp = temp.next;
            count++;
        }
        str += ";\n" + rowInfo + "};\n";

        temp = this.head;
        count = 0;
        rand = 0;
        while (temp) {
            //str += "Head" + count +  " label[\"Head: " + temp.llave + " : " + temp.clave + "\"]\n";
            let temp_ = temp.list;
            if (temp_ != null) {
                str += "Nodo" + count + " -> Valor" + rand + ";\n";
            }
            while (temp_) {
                str += "Valor" + rand + " [ label=\" Valor: " + temp_.valor + "\"];\n";
                if (temp_.list != null) {
                    str += "Valor" + rand + " -> Valor" + (rand+1) + ";\n";
                }
                temp_ = temp_.list;
                rand++;
            }
            temp = temp.next;
            count++;
        }
        return str;
    }

    graph() {
        let str = "digraph structs\n{\nrankdir=\"LR\"\nlabel=\"Categorias\"\nnode [shape=signature];\n";
        str += this.graficadora();
        str += "}";
        console.log("Successfully wrote to the file.");
        console.log(str);
        d3.select('#lienzo').graphviz()
        .width(500)
        .height(1200)
        .renderDot(str)

        return console.log(str)
    }
}

Categorias = new Tabla_Hash();

