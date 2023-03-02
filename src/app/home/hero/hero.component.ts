import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  slides = [
    { image: 'assets/images/home/carousel-1.png', title: 'Nous sommes les experts du transport routier', text: 'Le seul transporteur qui respecta rigoureusement les bonnes pratiques du transport routier' },
    { image: 'https://via.placeholder.com/800x400/0000FF/FFFFFF', title: '' , text: 'Slide 2' },
    { image: 'https://via.placeholder.com/800x400/FF0000/FFFFFF', title: '' ,text: 'Slide 3' }
  ];
}
