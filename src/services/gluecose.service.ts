import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable ,throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gluecose_registered } from '../models/gc_registered';




@Injectable({
  providedIn: 'root'
})
export class GluecoseService {

  constructor(
      private _http: HttpClient
  ) { }
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    GLUECOSE_API = environment.GLUECOSE_API;
    
      GetCollections(): Observable<Gluecose_registered[]>{
          const url = `${this.GLUECOSE_API}/gluecose/data`;
          return this._http.get<Gluecose_registered[]>(url, this.httpOptions).pipe(catchError(this.handleError));
      }

 private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
          throwError(`An error occurred ${error.error.message}`);
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
                  `Backend returned code ${error.status}, ` +
                  `body was: ${error.error}`);
          throwError(`Error ${error.error}`);
      }   
      // return an observable with a user-facing error message
      return throwError( `Something bad happened; please try again later. ${error.message}`);
  }

    //HandleErrors()
}
