import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Departamento } from '../Models/Departamento';
import { Funcionario } from '../Models/Funcionario';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  
  public modalRef: BsModalRef;  
  public departamentoForm: FormGroup;
  public titulo = 'Departamentos';
  public departamentoSelecionado: Departamento;
  public departamentos: Departamento[];
  public funcionarios: Funcionario[];
  public modo = 'post';
 
  openModal(template: TemplateRef<Funcionario>) {    
    this.modalRef = this.modalService.show(template);
  }
  
  constructor( private fb: FormBuilder, private modalService: BsModalService, private departamentoService: DepartamentoService) { 
    this.criarForm();    
  }
  
  ngOnInit() {
    this.carregarDepartamentos();
  }
  
  carregarDepartamentos(){
    this.departamentoService.getAll().subscribe(
      (model: Departamento[]) => {this.departamentos = model},
      (erro: any) => {console.error(erro)}
    );
  }
  
  criarForm(){
    this.departamentoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sigla: ['', Validators.required]
    });
  }

  salvarDepartamento(departamento: Departamento){
    (departamento.id === 0) ? this.modo = 'post' : this.modo = 'put';
    this.departamentoService[this.modo](departamento).subscribe(
      (model: Departamento) => {console.log(model); this.carregarDepartamentos()},
      (erro: any) => {console.error(erro)}
    );
  }

  departamentoSubmit(){
    this.salvarDepartamento(this.departamentoForm.value);
  }
  
  departamentoSelect(departamento: Departamento){
    this.departamentoSelecionado = departamento;
    this.departamentoForm.patchValue(departamento);
  }

  departamentoNovo(){
    this.departamentoSelecionado = new Departamento();
    this.departamentoForm.patchValue(this.departamentoSelecionado);
  }
  
  voltar(){
    this.departamentoSelecionado = null;
  }
  
  deletarDepartamento(id: number){
    this.departamentoService.delete(id).subscribe(
      (model: any) => {console.log(model); this.carregarDepartamentos()},
      (erro: any) => {console.error(erro)}
    );
  }

  carregar(departamento: Departamento){
    this.departamentoService.getByDepartamento(departamento).subscribe(
      (funcionarios: Funcionario[]) => { this.funcionarios = funcionarios },
      (erro: any) => { console.error(erro) }
    );
  }
}
