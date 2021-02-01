import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  titulo = 'Departamentos';

  public departamentos = [
    { id: 1, nome: 'Recursos Humanos', sigla: 'RH' },
    { id: 2, nome: 'Tecnologia da Informação', sigla: 'TI' },
    { id: 3, nome: 'Contabilidade', sigla: 'CT' },
    { id: 4, nome: 'Finanças', sigla: 'FI' },
    { id: 5, nome: 'Segurança Patrimonial', sigla: 'SP' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
