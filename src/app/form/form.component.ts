import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LibraryApiPhotosService } from '../library-api-photos.service';
import { PlayerService } from '../player.service';
import { Player } from '../models/player.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ LibraryApiPhotosService, PlayerService ]
})
export class FormComponent {
  avatar: any[] = null;

  constructor(private libraryPhoto: LibraryApiPhotosService, private playerService: PlayerService ) { }

  createNewPlayerForm(username: string, skill: string, avatar: string){
    this.libraryPhoto.getBySearch(avatar).subscribe(response => {
      this.avatar = response.json();
      let avatarLink: string = this.avatar.results[0].image.thumb;
      let newPlayer: Player = new Player(username, skill, avatarLink);

      this.playerService.addPlayer(newPlayer);


    })

  }
}
