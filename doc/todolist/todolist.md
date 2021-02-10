# Initiation au Javascript


Bienvenue dans cette initiation au javascript !
On va voir quelques les bases de la manipulation de DOM en javascript.

Pour ce faire on va essayer de faire un Outils de TODOList.

Pour ce faire on va avoir besoin d'un dossier `Todolist` avec la structure suivante
```
Todolist -
	-index.html
	-index.css
	-index.js
```

Simple mais efficace !

## On a besoin d'un squellette 

Pour la structure de notre todolist on va avoir besoin de faire un peut de html !

ok la base :
```html
<html>
	<head>
		<title>Todo App</title>
		<link  href='https://fonts.googleapis.com/css?family=Lato:300,400,700'  rel='stylesheet'  type='text/css'>
		<!-- on link vers notre fichier css -->
		<link  rel="stylesheet"  href="index.css"  type="text/css"  media="screen"  charset="utf-8">
	</head>
	<body>
		<!-- on link vers notre fichier js -->
		<script  src="index.js"></script>
	</body>
</html>
```

maintenant que l'on a notre base on va pouvoir créer notre todolist
Pour ce faire on a besoin:
	- d'un container
	- d'une list d'element (a faire, completer)
	- des elements (taches)

mon code ressemble donc à ça :
```html
<html>
	<head>
		<title>Todo App</title>
		<link  href='https://fonts.googleapis.com/css?family=Lato:300,400,700'  rel='stylesheet'  type='text/css'>
		<link  rel="stylesheet"  href="index.css"  type="text/css"  media="screen"  charset="utf-8">
	</head>
	<body>
		<div  class="container">
			<p>
				<label  for="new-task">Ajouter une tache</label>
				<input  id="new-task"  type="text">
				<button>Ajouter</button>
			</p>
			<h3>A faire</h3>
			<ul  id="incomplete-tasks">
				<li>
					<input  type="checkbox">
					<label>payer les factures</label>
					<input  type="text">
					<button  class="edit">Edit</button>
					<button  class="suprimer">suprimer</button>
				</li>
				<li>
					<input  type="checkbox">
					<label>faire les courses</label>
					<input  type="text"  value="Go Shopping">
					<button  class="edit">Edit</button>
					<button  class="suprimer">suprimer</button>
				</li>
			</ul>
				<h3>Completées</h3>
				<ul  id="completed-tasks">
					<li>
						<input  type="checkbox"  checked="">
						<label>Aller chez le doc</label>
						<input  type="text">
						<button  class="edit">Edit</button>
						<button  class="suprimer">suprimer</button>
					</li>
			</ul>
		</div>
		<script  src="index.js"></script>
	</body>
</html>
```

## un peut de style !

Ajoutons un peu de style à tout ça !
Alors aucun style n'est imposer, faite vous plaisir !

Pour ma part ça ressemble à ça :
```css
/* Basic Style */
body {
    background: #fff;
    color: #333;
    font-family: Lato, sans-serif;
}
.container {
    display: block;
    width: 400px;
    margin: 100px  auto  0;
}
ul {
    margin: 0;
    padding: 0;
}
li  * {
    float: left;
}
li, h3 {
    clear:both;
    list-style:none;
}
input, button {
    outline: none;
}
button {
    background: none;
    border: 0px;
    color: #888;
    font-size: 15px;
    width: 60px;
    margin: 10px  0  0;
    font-family: Lato, sans-serif;
    cursor: pointer;
}
button:hover {
    color: #333;
}
/* Heading */
h3,
label[for='new-task'] {
    color: #333;
    font-weight: 700;
    font-size: 15px;
    border-bottom: 2px  solid  #333;
    padding: 30px  0  10px;
    margin: 0;
    text-transform: uppercase;
}
input[type="text"] {
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    height: 18px;
    padding: 10px;
    border: 1px  solid  #ddd;
    background: #fff;
    border-radius: 6px;
    font-family: Lato, sans-serif;
    color: #888;
}
input[type="text"]:focus {
    color: #333;
}
/* New Task */
label[for='new-task'] {
    display: block;
    margin: 0  0  20px;
}
input#new-task {
    float: left;
    width: 318px;
}
p > button:hover {
    color: #0FC57C;
}

/* Task list */
li {
    overflow: hidden;
    padding: 20px  0;
    border-bottom: 1px  solid  #eee;
}
li > input[type="checkbox"] {
    margin: 0  10px;
    position: relative;
    top: 15px;
}
li > label {
    font-size: 18px;
    line-height: 40px;
    width: 237px;
    padding: 0  0  0  11px;
}
li > input[type="text"] {
    width: 226px;
}
li > .suprimer:hover {
    color: #CF2323;
}
/* Completed */
#completed-tasks  label {
    text-decoration: line-through;
    color: #888;
}

/* Edit Task */
ul  li  input[type=text] {
    display:none;
}
ul  li.editMode  input[type=text] {
    display:block;
}
ul  li.editMode  label {
    display:none;
}
```

Ok très bien, mais le js dans tous ça !

## En avant pour la logique

