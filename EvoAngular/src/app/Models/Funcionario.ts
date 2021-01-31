import { Departamento } from "./Departamento";

export class Funcionario {
    Id: number;
    Nome: string;
    Foto: string;
    RG: string;
    DepartamentoId: number;
    Departamento: Departamento;
}