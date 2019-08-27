import { Component, OnInit } from '@angular/core';
import { IFighter } from './fighter';
import { FighterService } from './fighter-service';
import { PagerService } from './pager-service';

@Component({
  selector: 'app-fighter-list-component',
  templateUrl: './fighter-list-component.component.html',
  styleUrls: ['./fighter-list-component.component.css']
})
export class FighterListComponentComponent implements OnInit {
  pageTitle: 'MMA Stats by Dan';
  imageWidth: 10;
  imageMargin: 2;
  showFighters = false;
  errorMessage: string;
  fighters: IFighter[] = [];

  pager: any = {};
  pagedItems: IFighter[];

  constructor(private fighterService: FighterService, private pagerService: PagerService) {

  }

  ngOnInit() {
    this.fighterService.getFighters().subscribe({
      next: fighters => {
        this.fighters = fighters;
        this.pagedItems = this.fighters;
        this.setPage(1);
      },
      error: err => { this.errorMessage = err; }
    });
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.fighters.length, page);
    this.pagedItems = this.fighters.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  toggleFighters(): void {
    this.showFighters = !this.showFighters;
  }

  filterFighters(category: string): void {
    this.pagedItems = this.fighters.filter(f => f.category === category);
  }

  showRecord(name: string): void {
    console.log('showRecord()', name);
  }

}
