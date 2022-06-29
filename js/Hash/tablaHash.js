class listaHash { // Lista
    constructor(clave, valor) {
        this.clave = null;
        this.valor = valor;
        this.key = clave % 20;
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
        let key = clave % 20;
        return key;
    }

    create_List() {
        for (let i = 0; i < 20; i++) {
            this.insert(i, null);
        }
    }

    insert(clave, valor) {
        let node = new listaHash(clave, valor);

        if (this.head === null) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }

    insert2(clave, valor) {
        let node = new listaHash(clave, valor);
        let key = this.getHash(clave, valor);
        let temp = this.head;
        node.clave = clave;

        while (temp.key != key) {
            temp = temp.next;
        }
        if (temp.valor === null) {
            temp.clave = clave;
            temp.valor = valor;
        } else {
            if (temp.list === null) {
                temp.list = node;
            } else {
                let temp_ = temp.list;
                while (temp_.list != null) {
                    temp_ = temp_.list;
                }
                temp_.list = node;
            }
        }
    }

    buscar(clave) {
        let key = this.getHash(clave % 20);
        let temp = this.head;

        while (temp.key != key) {
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
            str += "Head" + count + " [label=\"Head: " + temp.key + " : " + temp.valor + "\"];\n";
            rowInfo += "Head" + count + ";";
            temp = temp.next;
            count++;
        }
        temp = this.head;
        str += "Head" + 0;
        count = 1;
        temp = temp.next;
        while (temp) {
            str += " -> Head" + count;
            temp = temp.next;
            count++;
        }
        str += ";\n" + rowInfo + "};\n";

        temp = this.head;
        count = 0;
        while (temp) {
            //str += "Head" + count +  " label[\"Head: " + temp.key + " : " + temp.clave + "\"]\n";
            let temp_ = temp.list;
            if (temp_ != null) {
                str += "Head" + count + " -> List" + temp_.valor + ";\n";
            }
            while (temp_) {
                str += "List" + temp_.valor +  " [label=\" List: " + temp_.valor + "\"];\n";
                if(temp_.list != null){
                    str += "List" + temp_.valor + " -> List" + temp_.list.valor + ";\n";
                }
                temp_ = temp_.list;
            }
            temp = temp.next;
            count++;
        }
        return str;
    }

    graph() {
        let str = "digraph structs\n{\nrankdir=\"L\"\nlabel=\"Carnet: 201612174\"\nnode [shape=box];\n";
        str += this.graficadora();
        str += "}";
        console.log("Successfully wrote to the file.");
        console.log(str);
    }
}

let test = new Tabla_Hash();
test.insert2(444,"sdas");
test.insert2(24,"weq");
test.insert2(44, "qwerty");
test.insert2(123,"kevin");
test.insert2(523,"kevinR");
test.insert2(123421,"raul");
test.insert2(8213, "raulR");
test.insert2(124,"juan");
test.insert2(14205,"juanR");
test.insert2(12523,"maria");
test.insert2(12490, "mariaR");
test.insert2(19203,"jose");
test.graph();
