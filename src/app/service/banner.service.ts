import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  URL = environment.URL + 'banner/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<banner[]>{
    return this.httpClient.get<banner[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<banner>{
    return this.httpClient.get<banner>(this.URL + `detail/${id}`);
  }

  public save(Banner: banner): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Banner);
  }
  

  public update(id: number, Banner: banner): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Banner);
  }

  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
  */
}
