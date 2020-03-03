
export class Empleado {
    code: number;
    nombre: string;

    constructor(code: number = 0, name: string = "") {
        this.nombre = name;
        this.code = code;
    }

}
