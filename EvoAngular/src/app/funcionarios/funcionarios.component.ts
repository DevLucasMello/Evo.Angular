import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
  public modo = 'post';
  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.funcionarioService.getAll().subscribe(
      (funcionarios: Funcionario[]) => { this.funcionarios = funcionarios },
      (erro: any) => { console.error(erro) }
    );
  }

  criarForm() {
    this.funcionarioForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      foto: ['', Validators.required],
      rg: ['', Validators.required],
      departamentoId: ['', Validators.required]
    });
  }

  salvarFuncionario(funcionario: Funcionario) {
    (funcionario.id === 0) ? this.modo = 'post' : this.modo = 'put';

    this.funcionarioService[this.modo](funcionario).subscribe(
      (model: Funcionario) => { console.log(model); this.carregarFuncionarios() },
      (erro: any) => { console.error(erro) }
    );
  }

  funcionarioSubmit() {
    this.salvarFuncionario(this.funcionarioForm.value);
  }

  funcionarioSelect(funcionario: Funcionario) {
    this.funcionarioSelecionado = funcionario;
    this.funcionarioForm.patchValue(funcionario);
  }

  funcionarioNovo() {
    this.funcionarioSelecionado = new Funcionario();
    this.funcionarioForm.patchValue(this.funcionarioSelecionado);
  }

  voltar() {
    this.funcionarioSelecionado = null;
  }

  deletarFuncionario(id: number) {
    this.funcionarioService.delete(id).subscribe(
      (model: any) => { console.log(model); this.carregarFuncionarios() },
      (erro: any) => { console.error(erro) }
    );
  }
}
