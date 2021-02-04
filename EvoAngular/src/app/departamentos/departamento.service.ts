import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento } from '../Models/Departamento';
import { Funcionario } from '../Models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  baseUrl = `${environment.mainUrlAPI}/departamentos`;
  Url = `${environment.mainUrlAPI}/funcionarios/departamentos`;

constructor(private http: HttpClient) { }

getAll(): Observable<Departamento[]>{
  return this.http.get<Departamento[]>(`${this.baseUrl}`);
}

getById(id: number): Observable<Departamento>{
  return this.http.get<Departamento>(`${this.baseUrl}/${id}`);
}

getByDepartamento(id: number): Observable<Funcionario[]>{
  return this.http.get<Funcionario[]>(`${this.Url}/${id}`);
}

post(departamento: Departamento){
  return this.http.post(`${this.baseUrl}`, departamento);
}

put(departamento: Departamento){
  return this.http.put(`${this.baseUrl}/${departamento.id}`, departamento);
}

delete(id: number){
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}
