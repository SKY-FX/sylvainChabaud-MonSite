let angleTable = 
[
	[0,50],
	[15,15],
	[50,0],
	[85,15],
	[100,50],
	[85,85],
	[50,100],
	[15,85],
	[0,50]
]

class Tree
{
	constructor(ID_input, NB_leaf, NAMES_leaf, WIDTH_leaf, HEIGHT_leaf, X_tree, Y_tree, SIZE_tree)
	{
		this.ID_input = ID_input;
		this.NB_leaf = NB_leaf;
		this.NAMES_leaf = NAMES_leaf;
		this.WIDTH_leaf = WIDTH_leaf;
		this.HEIGHT_leaf = HEIGHT_leaf;
		this.X_tree = X_tree;
		this.Y_tree = Y_tree;
		this.SIZE_tree = SIZE_tree;
		
	}
	
	buildTree() 
	{
		// Lit l'ID d'entré
		let entranceDiv = document.getElementById(this.ID_input);
		
		/*
		// Crée une DIV dans le body pour le point d'entrée
		let entranceDiv = document.createElement("div");
		
		// Ajoute a la div un id
		entranceDiv.setAttribute("id",ID_input);
		
		// ajoute la div d'entrée au body
		document.body.appendChild(entranceDiv);
		*/
		
		
		// Crée une DIV pour l'arbre
		let treeDiv = document.createElement("div");
		
		// Ajoute a la div un id
		treeDiv.setAttribute("class","tree");
		
		// ajoute la div à la div principale
		entranceDiv.appendChild(treeDiv);
		
		
		// CREE TOUS LES A HREF
		for (var i=0; i<NB_leaf; i++)
		{
			// Crée un a href
			let a = document.createElement('a');
			a.href = "#";
			
			let _left = angleTable[i][0]; let _top = angleTable[i][1];
			
			// Positionne les feuilles dans l'arbre
			a.style.width = this.WIDTH_leaf + "%";
			a.style.height = this.HEIGHT_leaf + "%";
			a.style.left = 'calc(' + _left + '% - ' + this.WIDTH_leaf/2 + '%)';
			a.style.top = 'calc(' + _top + '% - ' + this.HEIGHT_leaf/2 + '%)';

			//Cree une Div pour le href
			let div = document.createElement('div');
			
			// ajoute la div au href
			a.appendChild(div);
				
			//Cree un paragraphe pour la div
			let p = document.createElement('p');
			
			// ajoute le paragraphe a la Div
			div.appendChild(p);
			
			// Crée le nom de la feuille
			var nameLeaf = document.createTextNode(this.NAMES_leaf[i]); 
			  
			// Ajoute le nom de la feuille dans le paragraphe
			p.appendChild(nameLeaf);  
				
			// Ajoute le href à l'arbre
			treeDiv.appendChild(a);
			
			// Constante
			let width = 100*this.SIZE_tree;
			let height = width;
			
			// Ecrit la position et la taille de l'arbre
			treeDiv.style.width = width + "%";
			treeDiv.style.height = height + "%";
			
			treeDiv.style.left = 'calc(' + this.X_tree + '% - ' + width/2 + '%)';
			treeDiv.style.top = 'calc(' + this.Y_tree + '% - ' + height/2 + '%)';
			
			// console.log(transform);
		}
		
		
		/* ######## */
		/* TRACE LES TRAITS */
		/*
		// Crée une DIV pour les traits
		let traitDiv = document.createElement("div");
		
		// Ajoute a la div un id
		traitDiv.setAttribute("class","trait");
		
		// ajoute la div à la div principale
		entranceDiv.appendChild(traitDiv);
		
		// CREE TOUS LES A HREF
		for (var i=0; i<NB_leaf; i++)
		{
			// Crée une DIV pour les traits
			let Div = document.createElement("div");
			
			// Ajoute a la div un id
			Div.setAttribute("class","trait" + (i+1));
			
			// ajoute la div à la div principale
			traitDiv.appendChild(Div);
		}
		*/
	}	
}

let ID_input = "MainTree"
let NB_leaf = 8;
let NAMES_leaf = ['entreprise','React','Fractal','Arduino','Musique','Code', 'Formation', 'LabView'];
let HEIGHT_leaf = 20; // en %
let WIDTH_leaf = 20; // en %
let X_tree1 = 50;  // en %
let Y_tree1 = 50;  // en %
let SIZE_tree1 = .5; // Zoom entre 0 et 1

let myTree = new Tree (ID_input, NB_leaf, NAMES_leaf, WIDTH_leaf, HEIGHT_leaf, X_tree1, Y_tree1, SIZE_tree1);
myTree.buildTree();


/*######################*/

// ID_input = "MainTree"
// NB_leaf = 3;
// NAMES_leaf = ['Qualité','Méthode','Equipe','Industrie','Ingénierie','Consultant', 'Matlab', 'C'];
// HEIGHT_leaf = 20; // en %
// WIDTH_leaf = 20; // en %
// X_tree = (X_tree1-50) + (100-(SIZE_tree1*100))/2 + (angleTable[1][0] * SIZE_tree1);
// Y_tree = (Y_tree1-50) + (100-(SIZE_tree1*100))/2 + (angleTable[1][1] * SIZE_tree1);
// SIZE_tree = .2;

// myTree = new Tree (ID_input, NB_leaf, NAMES_leaf, WIDTH_leaf, HEIGHT_leaf, X_tree, Y_tree, SIZE_tree);
// myTree.buildTree();

// /*######################*/

// ID_input = "MainTree"
// NB_leaf = 5;
// NAMES_leaf = ['Qualité','Méthode','Equipe','Industrie','Ingénierie','Consultant', 'Matlab', 'C'];
// HEIGHT_leaf = 20; // en %
// WIDTH_leaf = 20; // en %
// X_tree = (X_tree1-50) + (100-(SIZE_tree1*100))/2 + (angleTable[3][0] * SIZE_tree1);
// Y_tree = (Y_tree1-50) + (100-(SIZE_tree1*100))/2 + (angleTable[3][1] * SIZE_tree1);
// SIZE_tree = .2;

// myTree = new Tree (ID_input, NB_leaf, NAMES_leaf, WIDTH_leaf, HEIGHT_leaf, X_tree, Y_tree, SIZE_tree);
// myTree.buildTree();


