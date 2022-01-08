import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, map } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Personagem } from '../models/personagem';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  PUBLIC_KEY = '5a237863b3cc2061003cbbc4fe20dc06';
  TS = '1'
  HASH = 'bd4b447a65ef5d6b174f87cf9db6d2db';
        
  url = 'https://gateway.marvel.com/v1/public/characters'; // api rest

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }  
 
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json',  'accept': '*/*'}),
  //   params: new HttpParams().set('apikey', this.PUBLIC_KEY)
  //               .set('ts', this.TS)
  //               .set('hash',this.HASH)
  // }
  
  headers = new HttpHeaders({'Content-Type': 'application/json',  'accept':'*/*'});
  params =  new HttpParams().append('apikey', this.PUBLIC_KEY)
                .append('ts', this.TS)
                .append('hash',this.HASH);
 
 
  // Obtem todos os personagens
  getPersonagens(): Observable<Personagem[]> {
   
    const httpOptions = {
      headers: this.headers,
      params: this.params
    };
    return this.httpClient.get<Personagem[]>(this.url, httpOptions)
      .pipe(
      retry(2),
      map((response:any) => response.data.results),
      catchError(this.handleError)
      )
  }
 
  // Obtem todos os por nome
  getPersonagensByName(name: string): Observable<Personagem[]> {
    const httpOptions = {
      headers: this.headers,
      params: this.params.append('nameStartsWith',name)
    };
 
    return this.httpClient.get<Personagem[]>(this.url, httpOptions)
      .pipe(
      retry(2),
      map((response:any) => {
         (response)
        return response.data.results
      }),
      catchError(this.handleError)
      )
  }
 
  // Obtem um personagem pelo id
  getPersonagemById(id: number): Observable<Personagem> {
    
    const httpOptions = {
      headers: this.headers,
      params: this.params,
    };
 
    return this.httpClient.get<Personagem>(this.url + '/' + id, httpOptions)
      .pipe(
        retry(2),
        map((response:any) => response.data.results[0]),
        catchError(this.handleError)
      )
  }
 
  // Obtem um personagem pelo id
  getQuadrinhosById(id: number): Observable<any> {
    
    let httpOptions = {
      headers: this.headers,
      params: this.params
    };
 
    return this.httpClient.get<any>(this.url + '/' + id+"/comics", httpOptions)
      .pipe(
        retry(2),
        map((response:any) => response.data.results),
        catchError(this.handleError)
      )
  }
 
  getSeriesQuadrinhosById(id: number): Observable<any> {
 
   const httpOptions = {
     headers: this.headers,
     params: this.params
   };
 
    return this.httpClient.get<any>(this.url + '/' + id+"/series", httpOptions)
      .pipe(
        retry(2),
        map((response:any) => response.data.results),
        catchError(this.handleError)
      )
  }
 
  getHistoriasQuadrinhosById(id: number): Observable<any> {
   const httpOptions = {
     headers: this.headers,
     params: this.params
   };
    return this.httpClient.get<any>(this.url + '/' + id+"/stories", httpOptions)
      .pipe(
        retry(2),
        map((response:any) => response.data.results),
        catchError(this.handleError)
      )
  }
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
     (errorMessage);
    return throwError(() =>errorMessage);
  };

}
