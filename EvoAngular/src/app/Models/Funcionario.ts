import { Departamento } from "./Departamento";

export class Funcionario {

    constructor() {
        this.id = 0;
        this.nome = '';
        this.foto = '';
        this.rg = '';
        this.departamentoId = null;
        this.departamento = null;
    }

    id: number;
    nome: string;
    foto: string;
    rg: string;
    departamentoId: number;
    departamento: Departamento;
}