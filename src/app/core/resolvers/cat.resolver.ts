import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CatService } from '../services/cat.service';

@Injectable({
  providedIn: 'root',
})
export class CatsResolver implements Resolve<any[]> {
  constructor(private catService: CatService) {}

  resolve(): Observable<any[]> {
    return this.catService.getCats(12); 
  }
}