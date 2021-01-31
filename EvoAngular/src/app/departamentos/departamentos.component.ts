import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  titulo = 'Departamentos';

  public departamentos = [
    { nome: 'Recursos Humanos' },
    { nome: 'Tecnologia da Informação' },
    { nome: 'Contabilidade' },
    { nome: 'Finanças' },
    { nome: 'Segurança Patrimonial' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
