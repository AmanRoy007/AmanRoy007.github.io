import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HeroCarouselComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
