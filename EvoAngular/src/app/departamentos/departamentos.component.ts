import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Departamento } from '../Models/Departamento';

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
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  constructor( private fbD: FormBuilder, private modalService: BsModalService) { 
    this.criarForm();
  }
  
  ngOnInit() {
  }
  
  criarForm(){
    this.departamentoForm = this.fbD.group({
      nome: ['', Validators.required],
      sigla: ['', Validators.required]
    });
  }
  
  public departamentos = [
    { id: 1, nome: 'Recursos Humanos', sigla: 'RH' },
    { id: 2, nome: 'Tecnologia da Informação', sigla: 'TI' },
    { id: 3, nome: 'Contabilidade', sigla: 'CT' },
    { id: 4, nome: 'Finanças', sigla: 'FI' },
    { id: 5, nome: 'Segurança Patrimonial', sigla: 'SP' },
  ];

  departamentoSubmit(){
    console.log(this.departamentoForm.value);
  }
  
  departamentoSelect(departamento: Departamento){
    this.departamentoSelecionado = departamento;
    this.departamentoForm.patchValue(departamento);
  }
  
  voltar(){
    this.departamentoSelecionado = null;
  }   
}
