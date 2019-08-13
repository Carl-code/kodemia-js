var height = 100;
​
​
if ((height < 150) && (height >= 100)) {
  console.log('Pitufo');
} else if ((height > 170) && (height < 200)) {
  console.log('jirafa');
} else if ((height >= 150) && (height <= 170)) {
  console.log('ok');
} else {
  console.log('No seas payaso');
}


var name = 'Hello World Universe'

name.indexOf('World', 3)

//dado tu nombre y apellido ,lugar de nacimiento y fecha de nacimiento
//dar la primera parte del CURP

/*var name = 'Carlos';
var firstLastName = 'Ojeda';
var secondLastName = 'Avendaño'
var placeOfBirth = 'Oaxaca';
var dayOfBirth = 28-08-1994;
var gender = 'Masculino'

console.log("" + firstLastName.charAt(0)+ firstLastName.charAt(2) + secondLastName.charAt(0)+
name.charAt(0)) + dayOfBirth.valueOf(8) + dayOfBirth ;*/

//Dado tu nombre, apellidos, fecha de nacimiento, genero
// y lugar de nacimiento dar la primera parte del CURP
// 14-11-1996
var name = 'David'
var lastName = 'Cermeño Moranchel'
var birthDate = '14-11-1996'
var gender = 'Hombre'
var birthCity = 'DF'
var abbreviationName = (
 lastName.substring(0, 2) +
 lastName.charAt(lastName.indexOf(' ') + 1) +
 name.charAt(0)
)
var year = birthDate.slice(-2)
var month = birthDate.slice(3, 5)
var day = birthDate.slice(0, 2)
var abbreviationGender = gender.charAt(0)
var curp = ${abbreviationName}${year}${month}${day}${abbreviationGender}${birthCity}

secondLastName.charAt(2);

//imprimir el cuadrado de cada numero
//var numbers = [1,2,3,4,5,6,7,8]
/*
1
4
9
16
25
36
49
64
*/

var numbers = [1,2,3,4,5,6,7]
var index = 0;

while(index < numbers.length){
  console.log(numbers[index] **2)
  index++
}


