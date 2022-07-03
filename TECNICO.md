# Manual Técnico <h1>
  
Descripción de la Solución
-----------------------
  
La aplicación que se desarrollará será una versión en la cual se podrá ver la estructura
implementada junto con la aplicación de la misma, para corroborar que el funcionamiento
sea el correcto.
La aplicación contará con las siguientes opciones:

•La página web contará con un Login en la cual ingresaran sus datos para poder
ingresar identificándose ya sea un usuario que desea alquilar una pelicula o como un
administrador el cual tendrá el control del ingreso de nuevos pedidos y la revisión de
todas las funcionalidades.

• Un cliente podrá alquilar una pelicula y almacenarlo en su biblioteca virtual.

• Se tendrá una cola de espera para los clientes que soliciten un pelicula que no esté
disponible

• El cliente podrá visualizar todos los peliculas disponibles según las dos categorías más
comunes descritas más adelante, encontradas en esta librería simulando
estanterías.

• Se podrá visualizar los diferentes tops de ventas generales dentro de la página

• Se tendrá una vista en la cual se podrán apreciar las estructuras y su aplicación
homogénea.


• Se podrá consultar la biografía de cada uno de los actores de los peliculas
almacenados en un árbol binario ordenado por nombre.


• Se podrá ordenar la vista de los peliculas de forma ascendente y descendente.




  
Requerimientos del Entorno de Desarrollo
-----------------------

• IDE utilizada: Visual Studio Code 

• Espacio en memoria: 30 MB como mínimo

• Librerias: d3-graphviz

Requerimientos Funcionales del Sistema
-----------------------
• Cargar archivos .Json y visualizacion de las estructuras a implementar

• Busquedas en estructuras de datos

• Algoritmo de busqueda como BubbleSort y Quicksort

• Metodos recursivos



Diccionario de Clases 
-----------------------
Clase |  Definición 
------------ | -------------
`Arbol de busqueda binaria` | Clase que nos permitira almacenar los datos de los actores en un arbol de busqueda binaria
`Lista Simple` | Clase que nos permitira almacenar los datos de los usuarios previamente cargados en la aplicacion web
`Tabla Hash` | Clase que nos permitira almacenar y ordenar los categorias de forma acendente o desendente por medio de algoritmos de ordenamiento
`Arbol AVL` | Estructura de datos compuesta que nos permitira ver los peliculas alquiladas
`Arbol de merkle` | Guarda las transacciones de cada usuario.
`Blockchain` | Conjunto de transacciones guardas mediante bloques cada 300 segundos

Diccionario de Funciones
-----------------------

### Funciones de la clase Arbol de busqueda binaria ###
Función |  Definición 
------------ | -------------
`add` | Inserta nodos en el arbol binario de forma recursiva 
`insertar` | Asigna usando el metodo recursivo add los hijos y padres del arbol binario
`preOrden` | Recorre el arbol en preorden.
`inOrden` | Recorre el arbol en inorden.
`postOrden` | Recorre el arbol en postorden.
`agraphRaiz` | Metodo de graficacion recursiva.
`dotGraph` | Manda a llamar al metodo agraphRaiz para generar el String dot.
`Busqueda` | Busqueda de forma recursivo.

### Funciones de la clase peliculas ###
Función |  Definición 
------------ | -------------
`addpelicula` | Inserta de manera ordenada segun el nombre del pelicula.
`insertarInicio` | Inserta un nodo al inicio de la lista.
`insertarAlmedio` | Inserta un nodo al medio de lista.
`busqueda` | Metodo para buscar el nombre de un pelicula.
`buscarNodo` | Metodo que utiliza el metodo busqueda para retornar un nodo.
`getCantidad` | Verifica la cantidad de peliculas en un nodo.
`modificar` | Resta la cantidad de peliculas de un nodo.
`Graficar` | Graficar el archivo dot.

### Funciones de la clase ListaSimple ###
Función |  Definición 
------------ | -------------
`AddCliente` | Agrega un nodo a la lista
`dot` | grafica la lista Simplemente enlazada
`buscarCliente` | Busca un cliente.

### Funciones de la clase TablaHash ###
Función |  Definición 
------------ | -------------
`add` | Agrega un nodo a la lista a la lista de categorias.
`search` | Busca un nodo en la lista principal.
`insert` | Agrega un nodo de la lista principal.
`get` | Busca un id
`graph` | grafica el el dot.

### Arbol AVL ###
Función |  Definición 
------------ | -------------
`add` | Inserta nodos en el arbol binario de forma recursiva 
`insertar` | Asigna usando el metodo recursivo add los hijos y padres del arbol binario
`preOrden` | Recorre el arbol en preorden.
`inOrden` | Recorre el arbol en inorden.
`postOrden` | Recorre el arbol en postorden.
`agraphRaiz` | Metodo de graficacion recursiva.
`dotGraph` | Manda a llamar al metodo agraphRaiz para generar el String dot.
`Busqueda` | Busqueda de forma recursivo


### Funciones de la clase BlockChain ###
Función |  Definición 
------------ | -------------
`CrearBloque` | Genera un bloque y hace la prueba de trabajo


### Funciones Arbol de merkle ###
Función |  Definición 
------------ | -------------
`construirArbol` | Completa el arbol binario.
`hashing` | Genera el codigo hash mediante la funcion hash256
`insertar` | Inserta las transacciones




