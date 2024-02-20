// crear una funcion que reciba un objeto y validad que sea un objeto en caso de ser un objeto destructurar y mostrar los datos 
// en caso contrario solicitar que sea un objeto valido

const miobjecto = {
    nombre:"brayan",
    apellido:"solis"
};

let miarreglo = [1,2,3,4,5];
let numeracion = 3;

const mifuncion = (objetorecibido) => {
    if(!Array.isArray(objetorecibido)){
        recorrer(objetorecibido);
    } else {
        console.log("Por favor ingresa objeto");
    }
};

const recorrer = (objeto) => {
    const {nombre, apellido} = objeto
    console.log(`El nombre es: ${nombre}, el apellido es: ${apellido}`);
};

mifuncion(miarreglo)

// recorrer(miobjecto)
