import { ICells } from "../models/ICells";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})

export class CandyService {

    width: number = 9;
    candy_colors: ICells[] = [
        { Color: 'red' },
        { Color: 'yellow' },
        { Color: 'purple' },
        { Color: 'pink' }, //instead of blue
        { Color: 'green' },
        { Color: 'orange' },
        { Color: 'blue' }
    ]


    GetCell(): Array<ICells> | any {
        let result2: Array<ICells> = []
        for (let i = 0; i < this.width * this.width; i++) {
            let randomc: ICells = this.candy_colors[Math.floor(Math.random() * this.candy_colors.length)]
            let cell: ICells = {
                Color: randomc.Color,


            };
            result2.push(cell);
        }
        console.log(result2);
        return result2;
    }


    Checking_col(result2: ICells[]): boolean {
        let f = false;
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.width - 2; j++) {
                if (
                    result2[i + j * this.width].Color === result2[i + (j + 1) * this.width].Color &&
                    result2[i + j * this.width].Color === result2[i + (j + 2) * this.width].Color
                ) {
                    result2[i + j * this.width].Color = 'white';
                    result2[i + (j + 1) * this.width].Color = 'white';
                    result2[i + (j + 2) * this.width].Color = 'white';
                    f = true;
                }
            }
        }
        return f;
    }



    Fill(result2: ICells[]): void {

        for (let i = result2.length - 1; i >= 0; i--) {
            if (result2[i].Color === 'white') {
                for (let j = i - this.width; j >= 0; j -= this.width) {
                    if (result2[j].Color !== 'white') {
                        result2[i].Color = result2[j].Color;

                        result2[j].Color = 'white';

                        break;
                    }
                }
                if (result2[i].Color === 'white') {
                    let y = Math.floor(Math.random() * this.candy_colors.length);
                    result2[i].Color = this.candy_colors[y].Color;


                }
            }
        }
    }


}


