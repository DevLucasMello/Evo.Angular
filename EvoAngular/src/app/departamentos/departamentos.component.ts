import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { Departamento } from '../Models/Departamento';
import { Funcionario } from '../Models/Funcionario';
import { DepartamentoService } from './departamento.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit, OnDestroy {
  
  public modalRef: BsModalRef;  
  public departamentoForm: FormGroup;
  public titulo = 'Departamentos';
  public departamentoSelecionado: Departamento;
  public departamentos: Departamento[];
  public funcionariosDep: Funcionario[];
  private unsubscriber = new Subject();
  public modo = 'post';
 
  openModal(template: TemplateRef<any>, depId: number) {    
    this.funcionariosDepartamento(template, depId);
  }
  
  constructor(private fb: FormBuilder,
    private spinner: NgxSpinnerService, 
    private modalService: BsModalService, 
    private departamentoService: DepartamentoService 
    ){ 
    this.criarForm();    
  }
  
  ngOnInit() {
    this.spinner.show();
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

  funcionariosDepartamento(template: TemplateRef<any>, depId: number){
    this.spinner.show();
    this.departamentoService.getByDepartamento(depId)
    .pipe(takeUntil(this.unsubscriber))
    .subscribe(
      (func: Funcionario[]) => {this.funcionariosDep = func; this.modalRef = this.modalService.show(template);},
      (erro: any) => {console.error(erro);
      }
    );
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
