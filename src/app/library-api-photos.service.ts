import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Player } from './models/player.model';
// import { PlayerService } from './player.service';


@Injectable()
export class LibraryApiPhotosService {

  constructor(private http: Http) { }

  getBySearch(query: string){
    return this.http.get(`http://loc.gov/pictures/search/?q=${query}&fo=json`)
  }

}
