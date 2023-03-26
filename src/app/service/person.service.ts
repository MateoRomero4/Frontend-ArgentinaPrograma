import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  URL = environment.URL + 'persons/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<person[]>{
    return this.httpClient.get<person[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<person>{
    return this.httpClient.get<person>(this.URL + `detail/${id}`);
  }

  /*public save(Person: person): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Person);
  }
  */

  public update(id: number, Person: person): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Person);
  }

  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  */
}
