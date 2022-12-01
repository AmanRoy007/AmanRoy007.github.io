import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deadStream';
  latestAndTrending = 'latest and trending';
  bollywood ='Bollywood';
  viewLink='View all';
  movieCardObject = [{
    "imagePath":"../../assets/latestAndTrending/Mask group.jpg",
     "movieReleasedDate":"USA, 2016- Current",
     "movieCatgory":"Action, Adventure, Horror",
     "movieName":"Stranger Things",
  },
  {
    "imagePath":"../../assets/latestAndTrending/Mask group-1.jpg",
     "movieReleasedDate":"USA,2020",
     "movieCatgory":"Action",
     "movieName":"Shang-Chi Legend of the ten Rign",
  },
  {
    "imagePath":"../../assets/latestAndTrending/Mask group-2.jpg",
     "movieReleasedDate":"USA, 2021",
     "movieCatgory":"Action,thriller",
     "movieName":"Dune",
  },
  {
    "imagePath":"../../assets/latestAndTrending/Mask group 2.jpg",
     "movieReleasedDate":"USA, 2018 - Current",
     "movieCatgory":"Action, Thriller, ",
     "movieName":"Batman Begin",
  }
];
bollywoodObject = [
  {
    "imagePath":"../../assets/Bollywood/Mask group.jpg",
     "movieReleasedDate":"India, 2020 - Current",
     "movieCatgory":"Action, Adventure",
     "movieName":"Satyamev Jayate",
  },
  {
    "imagePath":"../../assets/Bollywood/Mask group-1.jpg",
     "movieReleasedDate":"India, 2018 - Current",
     "movieCatgory":"Action, Thriller",
     "movieName":"Raees",
  },
  {
    "imagePath":"../../assets/Bollywood/Mask group-2.jpg",
     "movieReleasedDate":"India, 2020 - Current",
     "movieCatgory":"Action ",
     "movieName":"Bajirao Mastani",
  },
  {
    "imagePath":"../../assets/Bollywood/Mask group-3.jpg",
     "movieReleasedDate":"India, 2020 - Current",
     "movieCatgory":"Adventure,Thriller ",
     "movieName":"Drishyam",
  }
]
}
