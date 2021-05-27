import { Component, OnInit,Input } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import {Movie} from '../models/movie.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() value: any;
  movieData: Movie[]=[];
  constructor(private movieservice:MoviesService) { }

  ngOnInit(): void {
    console.log(this.value)
    this.getMovieData(this.value)
  }

  //getting movie name and poster for carousel
  getMovieData(id: any)
  {
    this.movieservice.getMovies(id).subscribe(
      data=>{
        this.movieData=data
        console.log(this.movieData)
      }

    )
  }
}
