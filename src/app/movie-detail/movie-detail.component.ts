import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import {Details} from '../models/moviedetails.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  details: any;
  public id: any;
  constructor(private http: HttpClient,private movieservice:MoviesService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('id'))
      {
        this.id=paramMap.get('id')

        this.movieDetails(this.id)

       }
      });

  }

  //getting movie details
  movieDetails(id: any)
  {
    this.movieservice.getMovieDetails(id).subscribe
    ((data)=>
    {
      console.log(data)
      this.details=data
      console.log(this.details)
    })
  }

}
