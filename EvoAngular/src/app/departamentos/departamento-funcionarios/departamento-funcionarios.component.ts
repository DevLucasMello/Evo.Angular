import { Component, Input, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Models/Funcionario';

@Component({
  selector: 'app-departamento-funcionarios',
  templateUrl: './departamento-funcionarios.component.html',
  styleUrls: ['./departamento-funcionarios.component.css']
})
export class DepartamentoFuncionariosComponent implements OnInit {
  
  @Input() public funcionarios: Funcionario[];

  constructor() { }

  ngOnInit() {
  }
}
