//                              Operadores de comparación

//Un operador de comparación compara sus operandos y devuelve un valor lógico en función 
//de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores 
//numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico 
//estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son 
//del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este 
//comportamiento generalmente resulta en comparar los operandos numéricamente. Las únicas 
//excepciones a la conversión de tipos dentro de las comparaciones involucran a los 
//operadores === y !==, que realizan comparaciones estrictas de igualdad y desigualdad. Estos 
//operadores no intentan convertir los operandos a tipos compatibles antes de verificar la igualdad. 
//La siguiente tabla describe los operadores de comparación en términos de este código de ejemplo:

//Igual (==) 	Devuelve true si los operandos son iguales. 	

3 == var1
"3" == var1
3 == '3'

//No es igual (!=) 	Devuelve true si los operandos no son iguales. 	

var1 != 4
var2 != "3"

//Estrictamente igual (===) 	Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS. 	

3 === var1

//Desigualdad estricta (!==) 	Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo. 	

var1 !== "3"
3 !== '3'

//Mayor que (>) 	Devuelve true si el operando izquierdo es mayor que el operando derecho. 	

var2 > var1 
"12" > 2

//Mayor o igual que (>=) 	Devuelve true si el operando izquierdo es mayor o igual que el operando derecho. 	

var2 >= var1 
var1 >= 3

//Menor que (<) 	Devuelve true si el operando izquierdo es menor que el operando derecho. 	

var1 < var2
"2" < 12

//Menor o igual (<=) 	Devuelve true si el operando izquierdo es menor o igual que el operando derecho. 	

var1 <= var2 
var2 <= 5