import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Funcionario } from '../Models/Funcionario';
import { FuncionarioService } from './funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  
  public modalRef: BsModalRef; 
  public titulo = 'Funcionarios';
  public funcionarioSelecionado: Funcionario;
  public funcionarioForm: FormGroup;
  public funcionarios: Funcionario[];
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService, private modalService: BsModalService) {
    this.criarForm();
  }
  
  ngOnInit() {
    this.carregarFuncionarios();
  }
  
  carregarFuncionarios(){
    this.funcionarioService.getAll().subscribe(
      (funcionarios: Funcionario[]) => {this.funcionarios = funcionarios},
      (erro: any) => {console.error(erro)}
    );
  }
  
  criarForm(){
    this.funcionarioForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      foto: ['', Validators.required],
      rg: ['', Validators.required],
      departamentoId: ['', Validators.required],
      departamento: ['', Validators.required]
    });
  }

  salvarFuncionario(funcionario: Funcionario){
    this.funcionarioService.put(funcionario.id, funcionario).subscribe(
      (model: Funcionario) => {console.log(model); this.carregarFuncionarios()},
      (erro: any) => {console.error(erro)}
    );
  }

  funcionarioSubmit(){
    this.salvarFuncionario(this.funcionarioForm.value);
  }
  
  funcionarioSelect(funcionario: Funcionario){
    this.funcionarioSelecionado = funcionario;
    this.funcionarioForm.patchValue(funcionario);
  }
  
  voltar(){
    this.funcionarioSelecionado = null;
  } 
}
