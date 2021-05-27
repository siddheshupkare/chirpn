import { Component, OnInit, Input } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Genre} from '../models/genre.model'
import { MoviesService } from '../service/movies.service';
import {Movie} from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  genreData: Genre[]=[]

  constructor(private http: HttpClient, private movieservice:MoviesService) { }
  ngOnInit(): void {
    this.getGenreData()

  }

  //getting list of genres
  getGenreData()
  {
    this.movieservice.getGenre().subscribe(
      data=>{
        this.genreData=data

      },
      err=>console.log(err)
      )

  }



}
