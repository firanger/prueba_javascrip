alert("hola mundo");

/*

las variables se crean con let

*/
let mensaje;
mensaje= "otro hola mundo";
alert(mensaje);
const PI= 3.14;
//const id= get_id_account(45);
console.log(mensaje);
console.log(PI);

/*

tipos de datos

*/
let numero;
numero= "lol";

let otro_numero;
otro_numero=1.25;

//valores numericos especiales: infinity: representa el infinito matematico(es mayor a cualquier numero) , -infinity y NaN: representa un error de calculo


console.log(1/0);

console.log("si"/2);

// bigint son valores mayores y menores a 2**53-1 ya que en javascript y en muchos casos hay un limite para los valores numericos existe esta funcion que permite sobrepasar ese limite, se le coloca una n al final del numero para que pueda operar(se suele hacer en la criptografia)

let numero_grande;
numero_grande=141456454531354112315454158888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888n;
console.log(numero_grande);
// tipo booleano
let verdadero;
verdadero=true;
let falso= false;
let mayor;
mayor= 4>1;
console.log(mayor);
//tipo de dato null: no pertenece a ningun tipo de dato o vacio(no significa un objeto no existente como en otros lenguajes)
//tipo de dato undefined: es valor no asignado 

let nulo;
nulo= null;
console.log(nulo);
let indefinido;
console.log(indefinido);
// operador typeof: devuelve el tipo de dato de una variable typeof(x)
console.log(typeof (alert));
console.log(typeof(math));
console.log(typeof (null)); // error de javascript

// alert es para una ventana modal 
// prompt sirve para almacenar lo que uno coloque ahi 
let almacenar;
almacenar= prompt("digite algo ");
almacenar= prompt("digite algo ", ""); //solo para internet explorer

//confirm

let helado;
helado=confirm("te gusta el helado?");
console.log(helado);//true si presionan ok, false si presionan cancelar
// conversion de tipos 
// existen dos tipos de conversiones: explicita e implicita
//convertir a string
valor=String(otro_numero);
console.log(typeof(valor));
// convertir a numero
// conversiones que surgen automatica mente
console.log("6"/"2")



