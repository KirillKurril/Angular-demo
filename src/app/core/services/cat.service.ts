import { Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = environment.catApiUrl;
  private apiKey = environment.catApiKey;

  constructor(private http : HttpClient) { }

  getCats(limit : number = 10) : Observable<any[]>
  {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any[]>(`${this.apiUrl}/images/search?limit=${limit}`, {headers})
  }
}
