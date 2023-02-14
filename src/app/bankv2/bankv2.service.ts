import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bank } from 'src/model/Bank'

@Injectable({
  providedIn: 'root'
})
export class Bankv2Service {

  constructor(private http: HttpClient) { }
  getData():Observable<Bank[]>{
    return this.http.get<Bank[]>('http://localhost:8080/v2/banks/all');
  }
}
