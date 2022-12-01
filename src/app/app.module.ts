import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { LatestAndTrendingComponent } from './latest-and-trending/latest-and-trending.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import {SwiperModule} from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeroCarouselComponent,
    LatestAndTrendingComponent,
    BollywoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    SwiperModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
