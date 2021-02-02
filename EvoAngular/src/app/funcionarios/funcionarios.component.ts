import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from '../Models/Funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  
  public titulo = 'Funcionarios';
  public funcionarioSelecionado: Funcionario;
  public funcionarioForm: FormGroup;  
  
  constructor(private fbF: FormBuilder) {
    this.criarForm();
  }
  
  ngOnInit() {
  }
  
  criarForm(){
    this.funcionarioForm = this.fbF.group({
      nome: ['', Validators.required],
      rg: ['', Validators.required],
      departamento: ['', Validators.required]
    });
  }
  
  public funcionarios = [
    { id: 1, nome: 'Lucas', rg: '11.111.111-1', departamento: 'TI' },
    { id: 2, nome: 'Jéssica', rg: '22.222.222-2', departamento: 'TI' },
    { id: 3, nome: 'Aihara', rg: '33.333.333-3', departamento: 'TI' },
    { id: 4, nome: 'Akira', rg: '44.444.444-4', departamento: 'TI' },
    { id: 5, nome: 'Lucia', rg: '44.444.444-4', departamento: 'TI' },
    { id: 6, nome: 'Sonia', rg: '44.444.444-4', departamento: 'TI' },
    { id: 7, nome: 'Anideus', rg: '44.444.444-4', departamento: 'TI' },
    { id: 8, nome: 'Marco', rg: '33.333.333-3', departamento: 'TI' },
    { id: 9, nome: 'Valquiria', rg: '33.333.333-3', departamento: 'TI' },
    { id: 10, nome: 'Murilo', rg: '33.333.333-3', departamento: 'TI' },
    { id: 11, nome: 'Marcelo', rg: '22.222.222-2', departamento: 'TI' },
    { id: 12, nome: 'Paulo', rg: '22.222.222-2', departamento: 'TI' },
    { id: 13, nome: 'Cesar', rg: '22.222.222-2', departamento: 'TI' },
    { id: 14, nome: 'Conceição', rg: '11.111.111-1', departamento: 'TI' },
  ];

  funcionarioSubmit(){
    console.log(this.funcionarioForm.value);
  }
  
  funcionarioSelect(funcionario: Funcionario){
    this.funcionarioSelecionado = funcionario;
    this.funcionarioForm.patchValue(funcionario);
  }
  
  voltar(){
    this.funcionarioSelecionado = null;
  } 
}
