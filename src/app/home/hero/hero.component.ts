import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/home/hero/carousel.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit  {
  slides: any;
  readonly url:string = 'http://127.0.0.1:8000/storage/';

  constructor(private CarouselService: CarouselService) {}

  ngOnInit() {
    this.CarouselService.getSlides().subscribe((data) => {
      this.slides = data;
    });
  }
}
