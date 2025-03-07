// import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
// import { Resolve } from '@angular/router';
// import { TransferState, makeStateKey } from '@angular/core';
// import { isPlatformServer } from '@angular/common';
// import { CatService } from '../services/cat.service';
// import { Observable, of, tap } from 'rxjs';

// const CATS_KEY = makeStateKey<any[]>('cats');

// @Injectable({
//   providedIn: 'root',
// })
// export class CatsResolver implements Resolve<any[]> {
//   constructor(
//     private catService: CatService,
//     private transferState: TransferState,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   resolve(): Observable<any[]> {
//     if (isPlatformServer(this.platformId)) {
//       return this.catService.getCats(12).pipe(
//         tap((data) => {
//           this.transferState.set(CATS_KEY, data); 
//         })
//       );
//     } else {
//       const cats = this.transferState.get(CATS_KEY, []);
//       return of(cats);
//     }
//   }
// }