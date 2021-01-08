import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FalconeService {

  constructor(private http: HttpClient) { }
  defaultURL = 'https://findfalcone.herokuapp.com/';
  searchResults = new BehaviorSubject({});
  getplanets(): Observable <any>{
    return this.http.get(`${this.defaultURL}planets`).pipe(catchError(this.handleError));
  }

  getvehicles(): Observable <any>{
    return this.http.get(`${this.defaultURL}vehicles`).pipe(catchError(this.handleError));
  }

  getToken(): Observable <any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.post(`${this.defaultURL}token`, JSON.stringify({}), {headers}).pipe(catchError(this.handleError));
  } 

  findFalcone(payload: any): Observable <any>{
    let headers = new HttpHeaders();
    headers=headers.set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.post(`${this.defaultURL}find`, JSON.stringify(payload), {headers}).pipe(catchError(this.handleError));
  } 

  /**
   * This method used as a generic error handler
   * @param error of type Response
   */
  private handleError(error: Response | any): any {
    let errorMessage: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    return Observable.throw(errorMessage);
  }
}
