import { Component, Inject, makeStateKey, OnInit, PLATFORM_ID, TransferState } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const CATS_KEY = makeStateKey<any[]>('cats');

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{
  cats: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cats = this.route.snapshot.data['cats'];
  }
}
