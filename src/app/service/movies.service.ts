import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Genre} from '../models/genre.model'
import {Details} from '../models/moviedetails.model'
import {catchError, map, take} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  genreList: Genre[]=[]
  details: Details[]=[]
  constructor(private http: HttpClient) { }

  getGenre()
  {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41").
    pipe(map((data: any)=>data.genres))
  }

  getMovies(id: any)
  {
    return this.http.get("https://api.themoviedb.org/3/genre/"+id+"/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41").
    pipe(map((data:any)=>data.results))
  }

  getMovieDetails(id: any)
  {
    return this.http.get<Details[]>("https://api.themoviedb.org/3/movie/"+id+"?api_key=68e82445c8842ba8616d0f6bf0e97a41")

  }
}
