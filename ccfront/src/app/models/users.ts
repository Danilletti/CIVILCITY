export class USER {
  _id?: number;
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  universidad: string;

  constructor(nombre: string, apellido: string, correo: string, password: string, universidad: string) {
    this.nombre = nombre
    this.apellido = apellido
    this.correo = correo
    this.password = password
    this.universidad = universidad
  }
}
