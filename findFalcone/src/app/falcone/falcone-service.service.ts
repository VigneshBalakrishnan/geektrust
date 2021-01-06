import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FalconeService {

  constructor(private http: HttpClient) { }
  defaultURL = 'https://findfalcone.herokuapp.com/';

  getplanets(): Observable <any>{
    return this.http.get(`${this.defaultURL}planets`).pipe(catchError(this.handleError));
  }

  getvehicles(): Observable <any>{
    return this.http.get(`${this.defaultURL}vehicles`).pipe(catchError(this.handleError));
  }

  /**
   * This method used as a generic error handler
   * @param error of type Response
   */
  private handleError(error: Response | any): any {
    let errorMessage: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    return Observable.throw(errorMessage);
  }
}
