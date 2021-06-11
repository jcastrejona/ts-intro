
/*
    ===== Código de TypeScript =====
*/


interface personajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function sumar(a: number, b: number): number{
    return a+b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number,  base: number = 2): number {
    return numero * base;
}

function curar(personaje: personajeLOR, curarX: number): void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Loba',
    pv: 50,
    mostrarHp(){
        console.log('Punto de vida', this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();