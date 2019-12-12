import { Component, OnInit } from '@angular/core';
import { BeerService } from '@app/services/beer.service';
import { Beer } from '@app/models/beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[];

  constructor(
    private beerService: BeerService
  ) { }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.beerService.getAll().subscribe((returnedBeers: Beer[]) => {
      this.beers = returnedBeers;
    });
  }

}
