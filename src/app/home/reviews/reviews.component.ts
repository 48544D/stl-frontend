import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/home/reviews/carousel.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent /* implements OnInit */  {
  // reviews: any;
  // readonly url:string = 'http://127.0.0.1:8000/storage/';

  // constructor(private CarouselService: CarouselService) {}

  // ngOnInit() {
  //   this.CarouselService.getReviews().subscribe((data) => {
  //     this.reviews = data;
  //   });
  // }
  reviews = [
    {
      'title': 'Elias Mandar',
      'subTitle': 'Logistics Manager',
      'comment': 'Une société avec beaucoup de potentialité, un staff professionnel couronné par une qualité de service de niveau. Bon courage à Smart Logistique Transition !',
      'image': 'assets/images/home/reviews/mandar.png'
    }, 
    {
      'title': 'Moussa Sow',
      'subTitle': 'Something Manager',
      'comment': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
      'image': 'assets/images/home/reviews/mandar.png'
    }
  ]
}
