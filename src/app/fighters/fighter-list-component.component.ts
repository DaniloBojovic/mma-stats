import { Component, OnInit } from '@angular/core';
import { IFighter } from './product';
import { FighterService } from './fighter-service';

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
  filteredFighters: IFighter[] = [];

  constructor(private fighterService: FighterService) {

  }

  ngOnInit() {
    this.fighterService.getFighters().subscribe({
      next: fighters => {
        this.fighters = fighters;
        this.filteredFighters = this.fighters;
      },
      error: err => { this.errorMessage = err; }
    });
  }

  toggleFighters(): void {
    this.showFighters = !this.showFighters;
  }

  filterFighters(category: string): void {
    this.filteredFighters = this.fighters.filter(f => f.category === category);
  }

  showRecord(name: string): void {
    console.log('showRecord()', name);
  }

}
