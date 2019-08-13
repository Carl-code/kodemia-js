pairNumbers = [1,7,2,5,3,4,6,8,10];

pairNumbers.forEach(item => {
	(item % 2 === 0) ? console.log('Es par') : console.log('No es par')
})


//Dado un {array}, devolver los elementos que empiecen con a - A

letterArray = ['Perro', 'Gato', 'Animal', 'animacion'];

letterArray.filter(index => index [0] === 'a' || index [0] === 'A').forEach(item => {
		console.log(`${item} si empieza con a || A`)
})
//Verificar que todos los elementos en mi {array} son pares positivos
numbersArray = [1,2,4,6,7,9,10];

numbersArray.forEach(item => {
		(item % 2 === 0) ? console.log('Es par positivo') : console.log('No son pares')
})
//Retornar el total de cada uno de los elementos del {array} al cuadrado
numberTotal = [1,2,3,4,5];

numberTotal.reduce((initial,current) => initial + current **2,0)


var number = [1,2,3,4,5]

for(let i=0; i<number.length; i++){
		console.log(number[i])
}


