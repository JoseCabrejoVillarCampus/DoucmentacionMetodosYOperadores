//                              Operadores lógicos


//Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, 
//devuelven un valor booleano. Sin embargo, los operadores && y || en realidad devuelven el valor 
//de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no 
//booleanos, pueden devolver un valor no booleano. Los operadores lógicos se describen en la siguiente tabla.
//
//                                 =>AND Lógico (&&) 	
//
//expr1 && expr2 	Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, 
//cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.
//
//                                 =>OR lógico (||) 	
//
//expr1 || expr2 	Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, 
//cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false.
//
//                                =>NOT lógico (!) 	
//
//!expr 	Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.