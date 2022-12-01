import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';
import {movieDataObject} from '../custom.interface.ts/custom.interface';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-latest-and-trending',
  templateUrl: './latest-and-trending.component.html',
  styleUrls: ['./latest-and-trending.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LatestAndTrendingComponent implements OnInit {


  @Input() sectionTitle:string = '';
  @Input() viewLink:string = '';
  @Input() moviesDataObject: Array<movieDataObject>=[];

config: SwiperOptions = {
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: false,
  breakpoints:{
    320:{
      slidesPerView:1
    },
    768:{
      slidesPerView:3
    },
    1200:{
      slidesPerView:4
    }
  }
};
  constructor() { }

  ngOnInit(): void {
  }

}
