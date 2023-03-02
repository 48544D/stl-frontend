import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  slides = [
    { image: 'assets/images/home/carousel-1.png', text: 'Slide 1' },
    { image: 'https://via.placeholder.com/800x400/0000FF/FFFFFF', text: 'Slide 2' },
    { image: 'https://via.placeholder.com/800x400/FF0000/FFFFFF', text: 'Slide 3' }
  ];
}
