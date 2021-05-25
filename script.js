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
console.log(typeof(math))




