let num;
let i;
let usuariosTotalesEnES
let numeroIngresos;
let usuariosTotales = [];
class Usuario{
    constructor (nombre, edad, genero, altura, peso){
this.nombre = nombre;
this.edad = edad;
this.genero = genero;
this.altura = altura;
this.peso = peso;
    }
}
function agregar() {
    return  usuariosTotales.push();
}

/*primer renderizado*/
/*es importante validar que el storage no este vacío ya que usamos la clave para iniciar por lo que si esta vacio debe iniciar en cero el arreglo*/
if
(localStorage.getItem('usuariosTotalesEnES') !== undefined && localStorage.getItem('usuariosTotalesEnES')){  
    // se fija si hay datos en el storage los agrega en el arreglo , si no hay datos pone el arreglo como vacio 
    usuariosTotales= JSON.parse(localStorage.getItem('usuariosTotalesEnES'));
 }
else {
    usuariosTotales = [];
}
/*verificando las variables y la longitud del arreglo*/
console.log(usuariosTotales);
console.log(usuariosTotales.length);
let cabeza = document.getElementById("cabeza");
cabeza.innerHTML= `
<H1 class="display-1  text-center"> Bien venido al Simulador de Selección de Acondicionamiento Físico</H1>
`;
/*evento sobre un botón */
let boton1= document.getElementById("boton1");
boton1.className= "border rounded-pill btn btn-primary";
boton1.onclick =() => {
   /*aplicando dom para insertar una imagen*/
    let imagen = document.createElement ("div");
    imagen.className = "container";
    imagen.innerHTML= `
    <img  src="./imagenes/imagen.gif" alt="figura trotando" class="card-img-top">;
    `;
    console.log(usuariosTotales.length);
document.body.append(imagen);

    alert(`Hasta ahora estan ingresados ${usuariosTotales.length} voluntarios`);
    while(true){
        let numeroIngresos = prompt("¿Cuantos Voluntarios serán ingresados ahora?   escriba un número ó ´fin´ para terminar");
        if (!isNaN(numeroIngresos) && numeroIngresos != null && numeroIngresos != " "){
            /* numeroIngresos es un número y procedemos */
          for (let i=1 ; i <= numeroIngresos ; i++) {
          nombre = prompt("ingrese Nombre del Voluntario  " + i+":").toUpperCase();
         edad = parseInt(prompt("ingrese la edad"));
         genero = prompt("ingrese el género: utilice M para Masculino, F para Femenino u O para Otro").toUpperCase();
         if (genero === "M"){
            genero = "Masculino";
         }
         if (genero === "F"){
            genero = "Femenino"
         }
         altura = parseFloat(prompt("ingrese la  altura en cm"));
         peso = parseFloat(prompt("ingrese el peso en Kilogramos"));
                       
         const usuario = new Usuario (this.nombre, this.edad, this.genero, this.altura, this.peso);
         console.log(usuario);
         /*agregando los nuevos objetos creados al arreglo existente*/
         usuariosTotales.push(usuario);
         /*visualizando en varias presentaciones por consola*/
         console.log(usuariosTotales);
         console.table(usuariosTotales);
                
         } 
         /*almacenando el arreglo rresultante del proceso de ingreso*/
         const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }
         guardarLocal("usuariosTotalesEnES", JSON.stringify(usuariosTotales));
         
         break;
        
        }else if (numeroIngresos = "fin") {
            
                    alert("Hasta Luego");
        break;
        }else{
            alert( "Introdujo valor incorrecto");
        
        }continue;
         
        }
/* verificamos la inclución de los nuevos ingresos a la Lista existente */
console.log(usuariosTotales);
/* se publica la cantidad de ingresados hasta el momento ( como no se tiene BD se toma solo los ingresados mas los existente en el Array cargado)*/
let ingresos = prompt("hasta el momento estan ingresado  " + usuariosTotales.length + " Usuarios" + " ¿Que quiere conocer de los ingresados:  Nombre, Edad, Genero, Altura, Peso? en caso contrario escriba Salir").toLowerCase();

switch (ingresos){
    case "nombre":
        for (const ingreso of usuariosTotales){
       console.log(ingreso.nombre);
        alert(ingreso.nombre);  
        }break;
    case "edad":
        for (const variable of usuariosTotales){
        console.log(variable.nombre + "  " + variable.edad + " años");
        alert(variable.nombre + "  " + variable.edad + " años");
        }break;
    case "genero":
        for (const variable of usuariosTotales){
        console.log(variable.nombre + "  " + variable.genero );
        alert(variable.nombre + "  " + variable.genero);
        }break;
    case "altura":
        for (const variable of usuariosTotales){
        console.log(variable.nombre + "  " + variable.altura + " cm");
        alert(variable.nombre + "  " + variable.altura + " cm");
        }break;
    case "peso":
        for (const variable of usuariosTotales){
        console.log(variable.nombre + "  " + variable.peso + " kg");
        alert(variable.nombre + "  " + variable.peso  + " kg");
        }break;
    default:
        alert("hemos terminado")
        break;
    }

}