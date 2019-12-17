import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '@app/services/beer.service';
import { Beer } from '@app/models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  beer: Beer;

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getBeer(id);
  }

  getBeer(id: string): void {
    this.beerService.get(id).subscribe((returnedBeer: Beer) => {
      this.beer = returnedBeer;
    });
  }
}
