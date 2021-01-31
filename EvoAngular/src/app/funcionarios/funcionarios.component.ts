import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  titulo = 'Funcionarios';

  public funcionarios = [
    { nome: 'Lucas' },
    { nome: 'Jéssica' },
    { nome: 'Aihara' },
    { nome: 'Akira' },
    { nome: 'Lucia' },
    { nome: 'Sonia' },
    { nome: 'Anideus' },
    { nome: 'Marco' },
    { nome: 'Valquiria' },
    { nome: 'Murilo' },
    { nome: 'Marcelo' },
    { nome: 'Paulo' },
    { nome: 'Cesar' },
    { nome: 'Conceição' },    
  ];

  constructor() { }

  ngOnInit() {
  }

}
