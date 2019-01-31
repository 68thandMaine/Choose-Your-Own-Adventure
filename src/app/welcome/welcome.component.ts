import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
