import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../models/player.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [PlayerService]
})
export class NavbarComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.users = this.playerService.getPlayers();
  }



}
