import { Component } from '@angular/core';
import { IPlayerScore } from '../../models/IPlayerScore';
import { ScoreService } from '../../services/ScoreService.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {
  ScoreName: string = "Hello!";
  ScoreItems: Array<IPlayerScore> = [];

  constructor(public scoreService: ScoreService) {
    this.getPlayersScores();
  }

  getPlayersScores(): Array<IPlayerScore> | any {
    this.ScoreItems = this.scoreService.GetPlayerScores();
    return this.ScoreItems;
  }

  trackByFn(index: number, item: IPlayerScore): number {
    return item.Top;
  }
}