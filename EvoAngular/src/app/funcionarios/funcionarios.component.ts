import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  titulo = 'Funcionarios';

  public funcionarios = [
    { id: 1, nome: 'Lucas', rg: '11.111.111-1', setor: 'TI' },
    { id: 2, nome: 'Jéssica', rg: '22.222.222-2', setor: 'TI' },
    { id: 3, nome: 'Aihara', rg: '33.333.333-3', setor: 'TI' },
    { id: 4, nome: 'Akira', rg: '44.444.444-4', setor: 'TI' },
    { id: 5, nome: 'Lucia', rg: '44.444.444-4', setor: 'TI' },
    { id: 6, nome: 'Sonia', rg: '44.444.444-4', setor: 'TI' },
    { id: 7, nome: 'Anideus', rg: '44.444.444-4', setor: 'TI' },
    { id: 8, nome: 'Marco', rg: '33.333.333-3', setor: 'TI' },
    { id: 9, nome: 'Valquiria', rg: '33.333.333-3', setor: 'TI' },
    { id: 10, nome: 'Murilo', rg: '33.333.333-3', setor: 'TI' },
    { id: 11, nome: 'Marcelo', rg: '22.222.222-2', setor: 'TI' },
    { id: 12, nome: 'Paulo', rg: '22.222.222-2', setor: 'TI' },
    { id: 13, nome: 'Cesar', rg: '22.222.222-2', setor: 'TI' },
    { id: 14, nome: 'Conceição', rg: '11.111.111-1', setor: 'TI' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
