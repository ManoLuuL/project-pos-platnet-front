import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {
    private readonly urlBase = 'https://localhost:7128/professor';

    constructor(private http: HttpClient) { }

    listar(): Observable<any> {
        return this.http.get<any>(`${this.urlBase}/listar`);
    }

    obter(id: any): Observable<any> {
        return this.http.get<any>(`${this.urlBase}/obter/${id}`);
    }

    adicionar(professor: { nome: string, biografia: string }): Observable<any> {
        return this.http.post<any>(`${this.urlBase}/adicionar`, professor);
    }

    atualizar(professor: any): Observable<any> {
        return this.http.put<any>(`${this.urlBase}/atualizar`, professor);
    }

    remover(id: any): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}/remover/${id}`);
    }
}
