/* let elementRescue = document.getElementsByClassName('element')
let arrayElement = ['elemento1', 'elemento2', 'elemento3', 'elemento4']

for(i= 0; i<arrayElement.length; i++){
		elementRescue[i].innerHTML=arrayElement[i]
}
//Eejercicio numero 2

let arrayImage = [
		{'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGjTYVd_yf5xZIfxUwehsimcA4sk6eOWymfKgjWlPvpP3DUUH8g',
			'width': '25%',
			'height': '25%'
	},
	{'src':'https://img.imagenescool.com/ic/abrazos/abrazos_047.jpg',
			'width': '25%',
			'height': '25%'
	},
	{'src':'https://buenosdias.wiki/imagenes/imagenes-de-buenos-dias-amor.jpg',
			'width': '25%',
			'height': '25%'
	}
	,
	{'src':'https://img-cdn.hipertextual.com/files/2019/06/hipertextual-estas-son-imagenes-que-se-juegan-premio-mejor-astrofotografo-ano-2019009642-740x1110.jpg?strip=all&lossy=1&quality=57&ssl=1',
			'width': '25%',
			'height': '25%'
	}
]

let documentManipulation = document.getElementsByTagName('img')

for(let i=0; i<arrayImage.length; i++){
		document.getElementsByTagName('img')[i].setAttribute('src',arrayImage[i]['src'])
		document.getElementsByTagName('img')[i].setAttribute('width',arrayImage[i]['width'])
		document.getElementsByTagName('img')[i].setAttribute('height',arrayImage[i]['height'])
}

/* 
/*Eejercicio numero 3*/
//var imageNode = document.createElement('ul')
/* var nodes = [
	{
		'tag': 'ul',
		'children': [
			{
				'tag': 'li',
				'text': 'enjoy'
			},
			{
				'tag': 'li',
				'text': 'enjoy'
			},          {
				'tag': 'li',
				'text': 'enjoy'
			},          {
				'tag': 'li',
				'text': 'enjoy'
			}
		]
	}
]


const buildNodes = (nodes, parent) =>{
	nodes.forEach(({tag, children}) => {
		let nodeParent = document.createElement(tag)
		let childrens = children.map(({tag, text}) =>{
				let node = document.createElement(tag)
				let nodeText = document.createTextNode(text)
				node.appendChild(nodeText)
				nodeParent.appendChild(node)
		})

		console.log(nodeParent)
		document.getElementById(parent).appendChild(nodeParent)
	});
}

buildNodes(nodes, 'container')  */
/* for(let i=0;i<nodes.length; i++){
	document.getElementsByTagName('ul')[i].setAttribute('li',nodes[i]['enjoy']) 
}
 */

const buildNodes = (nodes, parent) => {
	nodes.forEach(({ tag, children }) => {
			let nodeParent = document.createElement(tag)
			children.forEach(({ tag, text }) => {
					let node = document.createElement(tag)
					let nodeText = document.createTextNode(text)
					node.appendChild(nodeText)
					nodeParent.appendChild(node)
			})
			parent.appendChild(nodeParent)
	});
}
const parent = document.getElementById('container')
parent.classList.add('prueba')
buildNodes(nodes, parent)


 


