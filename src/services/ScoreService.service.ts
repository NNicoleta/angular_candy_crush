import { IPlayerScore } from '../models/IPlayerScore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    GetPlayerScores(): Array<IPlayerScore> | any {
        let result: Array<IPlayerScore> = [
            {
                Name: 'Nico', Score: 100, Top: 3
            },
            {
                Name: 'Victor', Score: 201, Top: 2
            },
            {
                Name: 'Mada', Score: 920, Top: 1
            },
            {
                Name: 'Kevin', Score: 500, Top: 4
            },
            {
                Name: 'Vali', Score: 999, Top: 5
            }
        ]

        return result.sort((a, b) => b.Score - a.Score);
    }
}