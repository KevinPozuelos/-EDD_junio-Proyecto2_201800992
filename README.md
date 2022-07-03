Descripción general del la pagina web.
-----------------------
  
“Moviecats” es una conocida franquicia guatemalteca especializada en alquiler de cine y
videojuegos a través de tiendas físicas, servicios por correo y video bajo demanda. La
empresa fue fundada en el año 2019, contaba con más de 50 establecimientos a nivel
nacional.
“Moviecats” se vio lastrada por la pandemia que vino a restringir el acceso a todas
franquicias, haciendo que las ventas empezarán a disminuir haciendo que la empresa se
viniera a pique, los directivos de la empresa propusieron transformar su negocio y competir
con otros servicios de Streaming como por ejemplo: Disney+, Netflix, HBO, DAZN. Por lo
que se le solicita a usted que ha desarrollado la aplicación de CatsBooks exitosamente,
para que pueda implementar esta nueva aplicación Web, con el fin de agilizar, y brindar un
nuevo servicio a los clientes. Para ello dicha aplicación web estará desarrollada en el
lenguaje de javascript.

Requerimientos del sistema.
------------------------

• Cualquier navergador web actual.

• Espacio en memoria: 1 MB como mínimo

Guia de uso.
---------------------------
#### Archivo de entrada ####
La pagina web aceptara unicamente archivos en formato JSON, para cada uno de los diferentes modulos. Los cuales son: Usuarios, autores y libros. Los archivos de entrada unicamente se cargaran con el rol de administrador.

#### Login ####
El login permitira ingresar segun el rol a diferentes partes de la pagina web. Los roles son
administrador y usuario.

#### Carga users ####
Se podra cargar un archivo tipo JSON con el contenido de los usuario.Que seran cargados en una lista simple enlazada.
#### Carga Actores ####
Se podra cargar un archivo tipo JSON con el contenido de los Actores. Que seran cargados en un arbol binario 

#### Carga Peliculas ####
Se podra cargar un archivo tipo JSON con el contenido de los usuario.Estos seran cargados segun su categoria, para la categoria de Fantasia se cargara en una Arbol AVL

#### Carga Categorias ####
Se podra cargar un archivo tipo JSON con el contenido de los usuario.Estos seran cargados segun su categoria, para la categoria de Fantasia se cargara en una tabla hash.

#### Vista Home ####
Para este proyecto solo se pidio un login como home

#### Vista Peliculas ####
Se podra alquilar y dejar un comentario de la pelicula alquilada

#### Vista Actores ####
Se podra visualizar los diferentes ordenes de de actores.

#### Vista Peliculas ####
Se podran alquilar diferentes peliculas, solo una vez

#### Vista Categorias####
Se pobra observar las dos categorias disponibles

Glosario de Terminos
-----------------------

Término |  Definición 
------------ | -------------
`Arbol de busqueda Binaria`  | Un árbol binario de búsqueda también llamado BST (acrónimo del inglés Binary Search Tree) es un tipo particular de árbol binario que presenta una estructura de datos en forma de árbol usada en informática.
`Lista Simple` | Es un tipo de lista enlazada que permite moverse hacia delante y hacia atras. Cada nodo de una lista doblemente enlazada tiene dos enlaces, ademas de los campos de datos. Un enlace, el derecho, se utiliza para navegar la lista hacia delante. El otro enlace, el isquierdo, se utiliza para navegar la lista hacia atras.
`Arbol AVL` |  Es un arbol de busqueda binaria balanceado, mediante rotaciones de sus hojas.
`Hash Abierto` | Es una lista de listas que va incrementando sus espacios con una funcion rehashing, cada bloque de informacion se mete en una lista con un respectivo ID que se calcula mediante una funcion.
`Arbol de Merkle` | Es un arbol binario que tiene la finalidad de guardar dos tipos de nodo, los data block y los hash nodes. Este arbol sirve para implementarlo junto con blockchain, para hacer mas robusto el hash que se genera en dicho bloque
`Blockchain` | Estructura de datos que se encarga de guardar la raiz de un arbol de merkle y que posee una prueba de trabajo para generar un hash con un prefijo establecido
`JSON` | es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera un formato independiente del lenguaje.